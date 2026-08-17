/**
 * Hero particle runtime policy (Review #10).
 * Pure helpers — no DOM side effects.
 */

/**
 * Whether the continuous RAF particle loop should run.
 * @param {{
 *   prefersReducedMotion?: boolean,
 *   isVisible?: boolean,
 *   isDocumentHidden?: boolean,
 * }} flags
 */
export function shouldRunHeroParticles({
  prefersReducedMotion = false,
  isVisible = true,
  isDocumentHidden = false,
} = {}) {
  return !prefersReducedMotion && isVisible && !isDocumentHidden;
}

/**
 * Grid spacing — sparser on small/mobile viewports to cut particle count.
 * @param {{ viewportWidth?: number }} opts
 */
export function getHeroParticleSpacing({ viewportWidth = 1200 } = {}) {
  if (viewportWidth < 768) return 18;
  return 12;
}
