/**
 * Review #10 — hero particle runtime policy.
 */
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';
import {
  getHeroParticleSpacing,
  shouldRunHeroParticles,
} from './heroParticleRuntime.js';

const dir = dirname(fileURLToPath(import.meta.url));

describe('shouldRunHeroParticles (Review #10)', () => {
  it('runs only when visible, tab visible, and motion allowed', () => {
    expect(
      shouldRunHeroParticles({
        prefersReducedMotion: false,
        isVisible: true,
        isDocumentHidden: false,
      })
    ).toBe(true);
  });

  it('stops for reduced motion, offscreen, or hidden tab', () => {
    expect(
      shouldRunHeroParticles({
        prefersReducedMotion: true,
        isVisible: true,
        isDocumentHidden: false,
      })
    ).toBe(false);
    expect(
      shouldRunHeroParticles({
        prefersReducedMotion: false,
        isVisible: false,
        isDocumentHidden: false,
      })
    ).toBe(false);
    expect(
      shouldRunHeroParticles({
        prefersReducedMotion: false,
        isVisible: true,
        isDocumentHidden: true,
      })
    ).toBe(false);
  });
});

describe('getHeroParticleSpacing (Review #10)', () => {
  it('uses denser desktop spacing and sparser mobile spacing', () => {
    expect(getHeroParticleSpacing({ viewportWidth: 1200 })).toBe(12);
    expect(getHeroParticleSpacing({ viewportWidth: 390 })).toBe(18);
  });
});

describe('HeroDots wiring (Review #10)', () => {
  it('uses runtime policy, reduced-motion, visibility, and intersection observers', () => {
    const source = readFileSync(join(dir, 'HeroSection.jsx'), 'utf8');
    expect(source).toMatch(/shouldRunHeroParticles|heroParticleRuntime/);
    expect(source).toMatch(/prefers-reduced-motion:\s*reduce/);
    expect(source).toMatch(/IntersectionObserver/);
    expect(source).toMatch(/visibilitychange/);
    expect(source).toMatch(/cancelAnimationFrame/);
  });
});
