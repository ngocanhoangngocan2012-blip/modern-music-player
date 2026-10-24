/**
 * ============================================================================
 * LIQUID GLASS SHADER & DRAG INTERACTION ENGINE
 * ============================================================================
 */

export const VS_SOURCE = `
attribute vec2 a_position;
varying vec2 v_uv;

void main() {
  v_uv = (a_position + 1.0) * 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`;

export const FS_SOURCE = `
#extension GL_OES_standard_derivatives : enable
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif

varying vec2 v_uv;

uniform sampler2D u_background;
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_mouse_glow;

uniform vec4 u_pills[12];
uniform float u_radii[12];
uniform int u_pill_count;

uniform vec2 u_uv_scale;
uniform vec2 u_uv_offset;

uniform sampler2D u_al_texture;
uniform int u_has_al;
uniform vec2 u_al_uv_scale;
uniform vec2 u_al_uv_offset;

uniform float u_ior;
uniform float u_dispersion;
uniform float u_thickness;
uniform int u_dispersion_enabled;
uniform vec3 u_tint_color;
uniform float u_tint_opacity;
uniform float u_blur;
uniform int u_fallback_mode;
uniform float u_dpr;
uniform float u_darkness[12];

float sdCapsule(vec2 p, vec2 a, vec2 b, float r) {
  vec2 pa = p - a, ba = b - a;
  float baLenSq = dot(ba, ba);
  float h = baLenSq > 0.0001 ? clamp(dot(pa, ba) / baLenSq, 0.0, 1.0) : 0.0;
  return length(pa - ba * h) - r;
}

float getPillSDF(vec2 p, vec2 halfSize, float radius, out vec2 grad) {
  float segLen = max(0.0, halfSize.x - radius);
  vec2 a = vec2(-segLen, 0.0);
  vec2 b = vec2(segLen, 0.0);
  float d = sdCapsule(p, a, b, radius);
  
  vec2 pa = p - a, ba = b - a;
  float baLenSq = dot(ba, ba);
  float h = baLenSq > 0.0001 ? clamp(dot(pa, ba) / baLenSq, 0.0, 1.0) : 0.0;
  vec2 diff = pa - ba * h;
  float len = length(diff);
  grad = len > 0.0001 ? diff / len : vec2(0.0, 1.0);
  return d;
}

float sminSDF(float a, float b, float k, out float h) {
  h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
  return mix(b, a, h) - k * h * (1.0 - h);
}

vec4 sampleAmbientLight(vec2 canvasUv) {
  vec2 alUv = canvasUv * u_al_uv_scale + u_al_uv_offset;
  float alDist = min(min(alUv.x, 1.0 - alUv.x), min(alUv.y, 1.0 - alUv.y));
  float alBoundsFade = smoothstep(-0.04, 0.02, alDist);
  vec4 alTex = texture2D(u_al_texture, clamp(alUv, 0.0, 1.0));
  float alLum = max(alTex.r, max(alTex.g, alTex.b));
  float alAlpha = clamp(max(alTex.a, alLum) * alBoundsFade, 0.0, 1.0);
  vec3 alCol = alTex.rgb * 1.08;
  return vec4(alCol, alAlpha);
}

vec3 sampleVideo(vec2 uv) {
  vec2 clampedUv = clamp(uv, vec2(0.002), vec2(0.998));
  vec3 vidCol = texture2D(u_background, clampedUv).rgb;

  float inVidX = smoothstep(-0.015, 0.008, uv.x) * (1.0 - smoothstep(0.992, 1.015, uv.x));
  float inVidY = smoothstep(-0.015, 0.008, uv.y) * (1.0 - smoothstep(0.992, 1.015, uv.y));
  float videoWeight = clamp(inVidX * inVidY, 0.0, 1.0);

  if (videoWeight >= 0.999) {
    return vidCol;
  }

  vec3 darkBase = vec3(0.09, 0.10, 0.13);
  vec3 outsideCol = darkBase;

  if (u_has_al == 1) {
    vec2 canvasUv = (uv - u_uv_offset) / u_uv_scale;
    vec4 alData = sampleAmbientLight(canvasUv);
    outsideCol = mix(darkBase, alData.rgb, clamp(alData.a * 1.35, 0.0, 1.0));
  }

  return mix(outsideCol, vidCol, videoWeight);
}

void main() {
  vec2 pixelPos = gl_FragCoord.xy;
  float minDist = 9999.0;
  vec2 minGrad = vec2(0.0, 1.0);
  float minRadius = 18.0;
  float blendK = 7.5 * clamp(u_dpr, 0.75, 1.25);
  float pillDarkness = 0.5;

  for (int i = 0; i < 12; i++) {
    if (i >= u_pill_count) break;
    vec4 pill = u_pills[i];
    float r = u_radii[i];
    float curDarkness = u_darkness[i];
    vec2 offset = pixelPos - pill.xy;
    vec2 grad;
    float dist = getPillSDF(offset, pill.zw, r, grad);

    if (i == 0) {
      minDist = dist;
      minGrad = grad;
      minRadius = r;
      pillDarkness = curDarkness;
    } else {
      float h = 0.0;
      minDist = sminSDF(dist, minDist, blendK, h);
      minGrad = normalize(mix(minGrad, grad, h) + vec2(0.00001));
      minRadius = mix(minRadius, r, h);
      pillDarkness = mix(pillDarkness, curDarkness, h);
    }
  }

  float aa = 1.0;
#ifdef GL_OES_standard_derivatives
  aa = max(0.75, fwidth(minDist) * 1.0);
#endif
  float glassMask = 1.0 - smoothstep(-aa, aa, minDist);

  if (glassMask <= 0.001) {
    gl_FragColor = vec4(0.0);
    return;
  }

  if (u_fallback_mode == 1) {
    vec3 baseGlass = mix(vec3(0.92, 0.95, 0.98), u_tint_color, u_tint_opacity);
    gl_FragColor = vec4(baseGlass * (glassMask * 0.20), glassMask * 0.20);
    return;
  }

  float maxDepth = max(1.0, minRadius);
  float depth = clamp(-minDist / maxDepth, 0.0, 1.0);
  float u = 1.0 - depth;
  float dome = sqrt(max(0.001, 1.0 - u * u));
  float rimBevel = smoothstep(0.42, 0.01, depth);
  float slopeScale = (u / max(0.09, dome)) * u_thickness * rimBevel * 0.50;
  vec3 N = normalize(vec3(minGrad * slopeScale, 1.0));

  vec3 eyeRay = vec3(0.0, 0.0, -1.0);
  float etaG = 1.0 / u_ior;
  vec3 refrG = refract(eyeRay, N, etaG);
  if (length(refrG) < 0.1) refrG = reflect(eyeRay, N);

  vec3 refrR = refrG;
  vec3 refrB = refrG;
  if (u_dispersion_enabled == 1) {
    float disp = u_dispersion;
    float etaR = 1.0 / (u_ior - disp);
    float etaB = 1.0 / (u_ior + disp);
    refrR = refract(eyeRay, N, etaR);
    refrB = refract(eyeRay, N, etaB);
    if (length(refrR) < 0.1) refrR = reflect(eyeRay, N);
    if (length(refrB) < 0.1) refrB = reflect(eyeRay, N);
  }

  float distToBackplane = 16.0 * (1.0 + depth * 0.25);
  vec2 uvScaleFactor = (distToBackplane * u_dpr / u_resolution) * u_uv_scale;
  vec2 maxDisplace = vec2(0.038) * abs(u_uv_scale);

  vec2 uvOffsetG = clamp((refrG.xy / max(0.35, abs(refrG.z))) * uvScaleFactor, -maxDisplace, maxDisplace);
  vec2 uvOffsetR = uvOffsetG;
  vec2 uvOffsetB = uvOffsetG;
  if (u_dispersion_enabled == 1) {
    uvOffsetR = clamp((refrR.xy / max(0.35, abs(refrR.z))) * uvScaleFactor, -maxDisplace, maxDisplace);
    uvOffsetB = clamp((refrB.xy / max(0.35, abs(refrB.z))) * uvScaleFactor, -maxDisplace, maxDisplace);
  }

  vec2 rawVideoUV = v_uv * u_uv_scale + u_uv_offset;
  vec2 sampleUvG = rawVideoUV + uvOffsetG;

  vec3 colSharp;
  if (u_dispersion_enabled == 1) {
    vec2 sampleUvR = rawVideoUV + uvOffsetR;
    vec2 sampleUvB = rawVideoUV + uvOffsetB;
    colSharp = vec3(
      sampleVideo(sampleUvR).r,
      sampleVideo(sampleUvG).g,
      sampleVideo(sampleUvB).b
    );
  } else {
    colSharp = sampleVideo(sampleUvG);
  }

  vec3 refractedColor = colSharp;

  if (u_blur > 0.005) {
    float bRadiusPixels = (pow(u_blur, 0.75) * 10.5 + 1.0) * u_dpr;
    vec2 blurUvScale = (1.0 / u_resolution) * abs(u_uv_scale);
    vec3 bSum = vec3(0.0);
    float totalW = 0.0;

    for (int i = 0; i < 40; i++) {
      float fi = float(i);
      float rNorm = sqrt((fi + 0.5) / 40.0);
      float rPixels = rNorm * bRadiusPixels;
      float theta = fi * 2.39996323;
      vec2 offset = vec2(cos(theta), sin(theta)) * (rPixels * blurUvScale);
      float w = exp(-2.8 * rNorm * rNorm) * (1.0 - rNorm * rNorm * 0.95);
      bSum += sampleVideo(sampleUvG + offset) * w;
      totalW += w;
    }

    vec3 blurredColor = bSum / max(0.0001, totalW);
    float blurBlend = smoothstep(0.002, 0.04, u_blur);
    refractedColor = mix(colSharp, blurredColor, blurBlend);
  }

  float tintWeight = 0.0;
  if (u_tint_opacity > 0.001) {
    tintWeight = clamp(u_tint_opacity * 0.85, 0.0, 0.85);
  }

  vec3 glassBaseTone = vec3(0.09, 0.11, 0.15);
  vec3 targetTint = glassBaseTone;
  if (length(u_tint_color) > 0.01) {
    targetTint = mix(glassBaseTone, u_tint_color, clamp(u_tint_opacity * 1.5, 0.0, 1.0));
  }

  vec3 baseGlassColor = mix(refractedColor, targetTint, tintWeight);

  float bWidth = max(1.0, u_dpr * 1.0);
  float bCenter = -bWidth * 0.5;
  float bDist = abs(minDist - bCenter);
  float halfW = bWidth * 0.5;
  float borderLine = smoothstep(halfW + 0.6, halfW - 0.4, bDist);

  vec2 baseLightDir = normalize(vec2(-0.45, 0.89));
  float baseCosTheta = dot(minGrad, baseLightDir);
  float topHighlight = smoothstep(0.05, 0.92, baseCosTheta);
  float bottomBounce = smoothstep(0.05, 0.92, -baseCosTheta);

  float localLum = dot(colSharp.rgb, vec3(0.2126, 0.7152, 0.0722));
  float localDarkness = clamp((0.34 - localLum) / 0.24, 0.0, 1.0);
  float effectiveDarkness = clamp(mix(pillDarkness, localDarkness, 0.18), 0.0, 1.0);

  vec2 uvStep = (minGrad * u_dpr / u_resolution) * u_uv_scale;
  vec2 sampleNearUv = clamp(rawVideoUV + uvStep * 14.0, vec2(0.001), vec2(0.999));
  vec2 sampleMidUv  = clamp(rawVideoUV + uvStep * 28.0, vec2(0.001), vec2(0.999));
  vec3 colNear = sampleVideo(sampleNearUv);
  vec3 colMid  = sampleVideo(sampleMidUv);
  vec3 vicinityCol = colNear * 0.65 + colMid * 0.35;
  float nearLum = dot(colNear, vec3(0.2126, 0.7152, 0.0722));
  float midLum  = dot(colMid,  vec3(0.2126, 0.7152, 0.0722));
  float vicinityLum = nearLum * 0.65 + midLum * 0.35;

  float lumDelta = vicinityLum - (localLum * 0.90);
  float lightPotency = clamp(lumDelta / 0.28, 0.0, 1.0) * smoothstep(0.15, 0.40, vicinityLum);
  float dynamicCrest = pow(lightPotency, 1.50);

  float borderSoftenFactor = mix(1.0, 0.35, effectiveDarkness);
  float dynamicHighlightAdd = 0.22 * dynamicCrest;
  float borderGradAlpha = clamp((0.14 + 0.46 * topHighlight + 0.20 * bottomBounce + dynamicHighlightAdd) * borderSoftenFactor, 0.0, 0.65);
  float borderOpacity = borderLine * borderGradAlpha;

  float edgeDist = max(0.0, -minDist);
  float bevelEnv = smoothstep(0.0, bWidth, edgeDist) * (1.0 - smoothstep(bWidth, bWidth + 2.5 * u_dpr, edgeDist));
  float NdotV = clamp(N.z, 0.0, 1.0);
  float fresnel = pow(1.0 - NdotV, 3.0);
  float bevelGlass = fresnel * 0.16 * bevelEnv * mix(1.0, 0.35, effectiveDarkness);

  vec3 glassWithBevel = mix(baseGlassColor, vec3(1.0, 1.0, 1.0), bevelGlass);

  vec3 glassWithGlow = glassWithBevel;
  float glowAlphaAdd = 0.0;
  if (u_mouse_glow > 0.001) {
    float mouseDist = length(pixelPos - u_mouse);
    float glowRadius = 55.0 * max(1.0, u_dpr * 0.95);
    if (mouseDist < glowRadius) {
      float normD = mouseDist / glowRadius;
      float falloff = clamp(1.0 - normD, 0.0, 1.0);
      float glowProfile = falloff * falloff * (3.0 - 2.0 * falloff);
      float glowIntensity = glowProfile * u_mouse_glow;
      glassWithGlow = mix(glassWithBevel, vec3(1.0, 1.0, 1.0), glowIntensity * 0.50);
      glowAlphaAdd = glowIntensity * 0.65 * glassMask;
    }
  }

  float vGray = dot(vicinityCol, vec3(0.299, 0.587, 0.114));
  vec3 desatVicinity = mix(vec3(vGray), vicinityCol, 0.24);
  vec3 pastelRimColor = mix(vec3(0.95, 0.97, 1.00), desatVicinity, 0.38);
  vec3 baseRimColor = mix(vec3(0.97, 0.99, 1.0), vec3(0.85, 0.90, 0.96), effectiveDarkness * 0.45);
  vec3 targetRimColor = mix(baseRimColor, pastelRimColor, dynamicCrest * 0.80);
  vec3 rimColor = mix(glassWithGlow, targetRimColor, 0.82);
  vec3 rimWithSpecular = mix(rimColor, vec3(1.0, 1.0, 1.0), dynamicCrest * 0.28 * (1.0 - effectiveDarkness * 0.45));
  vec3 finalGlassColor = mix(glassWithGlow, rimWithSpecular, borderOpacity);

  vec2 canvasUv = (sampleUvG - u_uv_offset) / u_uv_scale;
  float inVidX = smoothstep(-0.015, 0.008, sampleUvG.x) * (1.0 - smoothstep(0.992, 1.015, sampleUvG.x));
  float inVidY = smoothstep(-0.015, 0.008, sampleUvG.y) * (1.0 - smoothstep(0.992, 1.015, sampleUvG.y));
  float centerVideoWeight = clamp(inVidX * inVidY, 0.0, 1.0);

  float alAlpha = 0.0;
  if (u_has_al == 1) {
    vec4 alData = sampleAmbientLight(canvasUv);
    alAlpha = alData.a;
  }

  float outsideAlpha = clamp(0.30 + alAlpha * 0.48, 0.30, 0.82);
  float glassBaseAlpha = mix(outsideAlpha, 1.0, centerVideoWeight);
  float finalAlpha = max(max(glassMask * glassBaseAlpha, borderOpacity * 0.95), glowAlphaAdd);

  gl_FragColor = vec4(finalGlassColor * finalAlpha, finalAlpha);
}
`;

export function createSoftSpringEase(dampingRatio = 0.74, frequency = 7.8) {
  const zeta = Math.max(0.05, Math.min(0.98, dampingRatio));
  const omega = Math.max(1.0, frequency);
  const omegaD = omega * Math.sqrt(1 - zeta * zeta);
  const factor = zeta / Math.sqrt(1 - zeta * zeta);
  
  const raw = (t) => 1 - Math.exp(-zeta * omega * t) * (Math.cos(omegaD * t) + factor * Math.sin(omegaD * t));
  const endVal = raw(1);

  return (p) => {
    if (p <= 0) return 0;
    if (p >= 1) return 1;
    return raw(p) / endVal;
  };
}

export class LiquidDragInteraction {
  constructor(element, options = {}) {
    this.el = element;
    this.mode = options.mode || 'follow';
    this.onRender = options.onRender || (() => {});
    this.targetPill = options.targetPill || null;

    this.isPressing = false;
    this.isDragging = false;
    this.maxDragDist = 0;
    this.startX = 0;
    this.startY = 0;
    this.baseLeft = 0;
    this.baseTop = 0;
    this.baseWidth = 38;
    this.baseHeight = 38;
    this.activePointerId = null;
    this.dragRafId = 0;

    this.pendingX = 0;
    this.pendingY = 0;
    this.pendingScaleX = 1;
    this.pendingScaleY = 1;

    this.init();
  }

  calcSpringDisplacement(dist) {
    if (dist <= 0) return 0;
    if (this.mode === 'follow') {
      const maxTravel = 20.0;
      const k = 0.44;
      return maxTravel * Math.tanh((dist * k) / maxTravel);
    } else {
      const maxTravel = 4.0;
      const k = 0.22;
      return maxTravel * Math.tanh((dist * k) / maxTravel);
    }
  }

  calcSpringDeformation(dist, travel, normX, normY, width, height) {
    const isFollow = (this.mode === 'follow');
    const springTension = Math.max(0, dist - travel);
    const maxStretchPx = isFollow ? 5.0 : 3.5;
    const tensionScale = isFollow ? 34.0 : 22.0;
    const stretchPx = maxStretchPx * Math.tanh(springTension / tensionScale);

    const alignX = normX * normX;
    const alignY = normY * normY;
    const stretchPxX = stretchPx * alignX;
    const stretchPxY = stretchPx * alignY;

    const safeW = Math.max(width, 32.0);
    const safeH = Math.max(height, 32.0);

    const pinchFactor = 0.18;
    const pinchPxX = (stretchPx * pinchFactor) * alignY;
    const pinchPxY = (stretchPx * pinchFactor) * alignX;

    const stretchX = Math.max(0.92, 1.0 + (stretchPxX - pinchPxX) / safeW);
    const stretchY = Math.max(0.92, 1.0 + (stretchPxY - pinchPxY) / safeH);

    return { stretchX, stretchY };
  }

  init() {
    const el = this.el;
    el.style.touchAction = 'none';

    el.addEventListener('pointerdown', (e) => {
      if (e.button !== 0) return;
      if (e.target.closest('input, button, .search-result-item, .search-chip')) return;
      this.isPressing = true;
      this.isDragging = false;
      this.maxDragDist = 0;
      this.startX = e.clientX;
      this.startY = e.clientY;
      this.activePointerId = e.pointerId;

      const rect = el.getBoundingClientRect();
      this.baseLeft = rect.left;
      this.baseTop = rect.top;
      this.baseWidth = rect.width;
      this.baseHeight = rect.height;

      window.addEventListener('pointermove', this.onPointerMove, { passive: true });
      window.addEventListener('pointerup', this.onRelease, { passive: true });
      window.addEventListener('pointercancel', this.onRelease, { passive: true });
    });

    this.onPointerMove = (e) => {
      if (!this.isPressing) return;
      if (this.activePointerId !== null && e.pointerId !== this.activePointerId) return;

      const rawDx = e.clientX - this.startX;
      const rawDy = e.clientY - this.startY;
      const dist = Math.hypot(rawDx, rawDy);
      this.maxDragDist = Math.max(this.maxDragDist, dist);

      if (!this.isDragging && this.maxDragDist >= 6) {
        this.isDragging = true;
      }

      const normX = dist > 0 ? rawDx / dist : 0;
      const normY = dist > 0 ? rawDy / dist : 0;
      const travel = this.calcSpringDisplacement(dist);

      const finalX = normX * travel;
      const finalY = normY * travel;
      const { stretchX, stretchY } = this.calcSpringDeformation(dist, travel, normX, normY, this.baseWidth, this.baseHeight);

      const pressBlend = Math.max(0, 1.0 - dist / 7.0);
      this.pendingX = finalX;
      this.pendingY = finalY;
      this.pendingScaleX = stretchX - 0.015 * pressBlend;
      this.pendingScaleY = stretchY - 0.015 * pressBlend;

      if (!this.dragRafId) {
        this.dragRafId = requestAnimationFrame(() => {
          this.dragRafId = 0;
          if (!this.isPressing && !this.isDragging) return;
          el.style.transform = `translate3d(${this.pendingX}px, ${this.pendingY}px, 0) scale(${this.pendingScaleX}, ${this.pendingScaleY})`;
          this.onRender();
        });
      }
    };

    this.onRelease = () => {
      if (!this.isPressing) return;
      this.isPressing = false;

      if (this.dragRafId) {
        cancelAnimationFrame(this.dragRafId);
        this.dragRafId = 0;
      }

      window.removeEventListener('pointermove', this.onPointerMove);
      window.removeEventListener('pointerup', this.onRelease);
      window.removeEventListener('pointercancel', this.onRelease);

      const isFollow = (this.mode === 'follow');
      const tensionRatio = Math.tanh(this.maxDragDist / (isFollow ? 45.0 : 55.0));
      const duration = (isFollow ? 0.32 : 0.34) + tensionRatio * 0.08;
      const zeta = 0.74;
      const omega = 8.2;

      const easeFn = createSoftSpringEase(zeta, omega);
      const startX = this.pendingX;
      const startY = this.pendingY;
      const startScaleX = this.pendingScaleX;
      const startScaleY = this.pendingScaleY;
      const startTime = performance.now();

      const animateSpring = (now) => {
        const elapsed = (now - startTime) / 1000;
        const progress = Math.min(1.0, elapsed / duration);
        const easeVal = easeFn(progress);

        const curX = startX * (1 - easeVal);
        const curY = startY * (1 - easeVal);
        const curScaleX = startScaleX + (1.0 - startScaleX) * easeVal;
        const curScaleY = startScaleY + (1.0 - startScaleY) * easeVal;

        el.style.transform = `translate3d(${curX}px, ${curY}px, 0) scale(${curScaleX}, ${curScaleY})`;
        this.onRender();

        if (progress < 1.0) {
          requestAnimationFrame(animateSpring);
        } else {
          el.style.transform = '';
          this.onRender();
          this.isDragging = false;
        }
      };

      requestAnimationFrame(animateSpring);
    };
  }
}

/**
 * High-performance Liquid Glass Renderer Engine
 */
export function createLiquidGlassRenderer(canvas, targetElements = []) {
  if (!canvas) return null;
  const gl = canvas.getContext('webgl', { alpha: true, premultipliedAlpha: true }) ||
             canvas.getContext('experimental-webgl', { alpha: true, premultipliedAlpha: true });
  if (!gl) return null;

  gl.getExtension('OES_standard_derivatives');

  function createShader(type, src) {
    const s = gl.createShader(type);
    gl.shaderSource(s, src);
    gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
      console.warn('Liquid Glass shader compile failed:', gl.getShaderInfoLog(s));
      return null;
    }
    return s;
  }

  const vs = createShader(gl.VERTEX_SHADER, VS_SOURCE);
  const fs = createShader(gl.FRAGMENT_SHADER, FS_SOURCE);
  if (!vs || !fs) return null;

  const prog = gl.createProgram();
  gl.attachShader(prog, vs);
  gl.attachShader(prog, fs);
  gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
    console.warn('Liquid Glass link failed:', gl.getProgramInfoLog(prog));
    return null;
  }

  // Quad geometry
  const posBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
    -1, -1,
     1, -1,
    -1,  1,
    -1,  1,
     1, -1,
     1,  1,
  ]), gl.STATIC_DRAW);

  // Background texture
  const bgTexture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, bgTexture);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  // Default 1x1 dark slate pixel
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([20, 22, 28, 255]));

  // Cache uniform locations
  const uRes = gl.getUniformLocation(prog, 'u_resolution');
  const uMouse = gl.getUniformLocation(prog, 'u_mouse');
  const uMouseGlow = gl.getUniformLocation(prog, 'u_mouse_glow');
  const uPillCount = gl.getUniformLocation(prog, 'u_pill_count');
  const uPills = gl.getUniformLocation(prog, 'u_pills');
  const uRadii = gl.getUniformLocation(prog, 'u_radii');
  const uUvScale = gl.getUniformLocation(prog, 'u_uv_scale');
  const uUvOffset = gl.getUniformLocation(prog, 'u_uv_offset');
  const uIor = gl.getUniformLocation(prog, 'u_ior');
  const uDispersion = gl.getUniformLocation(prog, 'u_dispersion');
  const uThickness = gl.getUniformLocation(prog, 'u_thickness');
  const uDispEnabled = gl.getUniformLocation(prog, 'u_dispersion_enabled');
  const uTintColor = gl.getUniformLocation(prog, 'u_tint_color');
  const uTintOpacity = gl.getUniformLocation(prog, 'u_tint_opacity');
  const uBlur = gl.getUniformLocation(prog, 'u_blur');
  const uFallback = gl.getUniformLocation(prog, 'u_fallback_mode');
  const uDpr = gl.getUniformLocation(prog, 'u_dpr');
  const uDarkness = gl.getUniformLocation(prog, 'u_darkness');

  let mouseX = -9999;
  let mouseY = -9999;
  let mouseGlow = 0;
  let isRunning = false;
  let animId = 0;

  window.addEventListener('pointermove', (e) => {
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    mouseX = (e.clientX - rect.left) * dpr;
    mouseY = (canvas.clientHeight - (e.clientY - rect.top)) * dpr; // flip Y for GL
    mouseGlow = 0.85;
  }, { passive: true });

  function updateBackgroundFromImage(imgElement) {
    if (!imgElement || !imgElement.complete || imgElement.naturalWidth === 0) return;
    try {
      gl.bindTexture(gl.TEXTURE_2D, bgTexture);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, imgElement);
    } catch (e) {
      // CORS or tainted canvas fallback
    }
  }

  function render() {
    if (!canvas.parentElement) return;

    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const displayWidth = Math.round(canvas.clientWidth * dpr);
    const displayHeight = Math.round(canvas.clientHeight * dpr);

    if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
      canvas.width = displayWidth;
      canvas.height = displayHeight;
    }

    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.useProgram(prog);

    // Bind quad buffer
    const aPos = gl.getAttribLocation(prog, 'a_position');
    gl.enableVertexAttribArray(aPos);
    gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    // Fade mouse glow
    mouseGlow *= 0.95;

    // Set uniforms
    gl.uniform2f(uRes, canvas.width, canvas.height);
    gl.uniform2f(uMouse, mouseX, mouseY);
    gl.uniform1f(uMouseGlow, mouseGlow);
    gl.uniform2f(uUvScale, 1.0, 1.0);
    gl.uniform2f(uUvOffset, 0.0, 0.0);
    gl.uniform1f(uIor, 1.45);
    gl.uniform1f(uDispersion, 0.016);
    gl.uniform1f(uThickness, 1.25);
    gl.uniform1i(uDispEnabled, 1);
    gl.uniform3f(uTintColor, 0.10, 0.12, 0.16);
    gl.uniform1f(uTintOpacity, 0.45);
    gl.uniform1f(uBlur, 0.60);
    gl.uniform1i(uFallback, 0);
    gl.uniform1f(uDpr, dpr);

    // Compute pills from target elements
    const pillsData = new Float32Array(48); // 12 pills * 4
    const radiiData = new Float32Array(12);
    const darknessData = new Float32Array(12);
    let count = 0;

    const canvasRect = canvas.getBoundingClientRect();

    targetElements.forEach((el, idx) => {
      if (!el || idx >= 12) return;
      const r = el.getBoundingClientRect();
      if (r.width <= 0 || r.height <= 0) return;

      // Invert Y for WebGL gl_FragCoord coordinate system
      const cx = (r.left - canvasRect.left + r.width * 0.5) * dpr;
      const cy = (canvasRect.bottom - r.bottom + r.height * 0.5) * dpr;
      const halfW = (r.width * 0.5) * dpr;
      const halfH = (r.height * 0.5) * dpr;
      const radius = Math.min(halfW, halfH, (el.dataset.radius ? parseFloat(el.dataset.radius) : 26.0) * dpr);

      const offset = idx * 4;
      pillsData[offset] = cx;
      pillsData[offset + 1] = cy;
      pillsData[offset + 2] = halfW;
      pillsData[offset + 3] = halfH;
      radiiData[idx] = radius;
      darknessData[idx] = 0.55;
      count++;
    });

    gl.uniform1i(uPillCount, Math.max(1, count));
    gl.uniform4fv(uPills, pillsData);
    gl.uniform1fv(uRadii, radiiData);
    gl.uniform1fv(uDarkness, darknessData);

    gl.drawArrays(gl.TRIANGLES, 0, 6);
  }

  function start() {
    if (isRunning) return;
    isRunning = true;
    function loop() {
      if (!isRunning) return;
      render();
      animId = requestAnimationFrame(loop);
    }
    animId = requestAnimationFrame(loop);
  }

  function stop() {
    isRunning = false;
    if (animId) {
      cancelAnimationFrame(animId);
      animId = 0;
    }
  }

  return {
    render,
    start,
    stop,
    updateBackgroundFromImage,
    gl
  };
}
