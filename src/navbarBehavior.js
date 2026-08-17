/**
 * Marketing navbar scroll / section helpers (Review #17–#19, #29).
 */

export const NAV_TRACKED_SECTIONS = Object.freeze(['platform', 'pricing', 'faq']);

/**
 * Resolve which landing section should be highlighted.
 * Resets to "hero" when the viewport is above the first tracked section.
 *
 * @param {number} scrollY
 * @param {(id: string) => { top: number, height: number } | null} getSectionBounds
 * @param {number} [offset=120]
 * @returns {string}
 */
export function resolveActiveSection(scrollY, getSectionBounds, offset = 120) {
  const scrollPosition = scrollY + offset;

  for (const sectionId of NAV_TRACKED_SECTIONS) {
    const bounds = getSectionBounds(sectionId);
    if (!bounds) continue;
    if (
      scrollPosition >= bounds.top &&
      scrollPosition < bounds.top + bounds.height
    ) {
      return sectionId;
    }
  }

  const platform = getSectionBounds('platform');
  if (platform && scrollPosition < platform.top) {
    return 'hero';
  }

  // Past tracked sections (e.g. footer) — keep last match or hero.
  const faq = getSectionBounds('faq');
  if (faq && scrollPosition >= faq.top + faq.height) {
    return 'faq';
  }

  return 'hero';
}

/**
 * Compute document scroll progress percent (0–100).
 * @param {number} scrollY
 * @param {number} scrollHeight
 * @param {number} clientHeight
 */
export function computeScrollProgress(scrollY, scrollHeight, clientHeight) {
  const totalHeight = scrollHeight - clientHeight;
  if (totalHeight <= 0) return 0;
  return Math.min(100, Math.max(0, (scrollY / totalHeight) * 100));
}

/**
 * Wrap a scroll handler so it runs at most once per animation frame.
 * @param {() => void} handler
 */
export function createRafThrottledHandler(handler) {
  let ticking = false;
  return () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      handler();
    });
  };
}

/**
 * Retry until a section node exists (or hero / max attempts), then invoke scroll.
 * Replaces fixed setTimeout(120) cross-route race.
 *
 * @param {string} sectionId
 * @param {{
 *   getElementById?: (id: string) => Element | null,
 *   performScroll: (id: string) => void,
 *   maxAttempts?: number,
 *   schedule?: (fn: () => void) => void,
 * }} options
 * @returns {() => void} cancel
 */
export function waitForSectionThenScroll(sectionId, options) {
  const getElementById =
    options.getElementById ||
    ((id) => (typeof document !== 'undefined' ? document.getElementById(id) : null));
  const schedule =
    options.schedule ||
    ((fn) => {
      if (typeof requestAnimationFrame === 'function') {
        requestAnimationFrame(fn);
      } else {
        setTimeout(fn, 16);
      }
    });
  const maxAttempts = options.maxAttempts ?? 40;

  let cancelled = false;
  let attempts = 0;

  const tick = () => {
    if (cancelled) return;
    const ready =
      sectionId === 'hero' || Boolean(getElementById(sectionId));
    if (ready || attempts >= maxAttempts) {
      options.performScroll(sectionId);
      return;
    }
    attempts += 1;
    schedule(tick);
  };

  schedule(tick);
  return () => {
    cancelled = true;
  };
}
