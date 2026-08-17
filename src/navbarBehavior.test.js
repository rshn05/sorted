/**
 * Review #17–#19, #29 — navbar section / scroll helpers.
 */
import { afterEach, describe, expect, it, vi } from 'vitest';
import {
  computeScrollProgress,
  createRafThrottledHandler,
  resolveActiveSection,
  waitForSectionThenScroll,
} from './navbarBehavior.js';

describe('resolveActiveSection (Review #18)', () => {
  it('highlights hero when scroll is above platform', () => {
    const getBounds = (id) =>
      ({
        platform: { top: 800, height: 400 },
        pricing: { top: 1400, height: 400 },
        faq: { top: 2000, height: 400 },
      })[id] || null;

    expect(resolveActiveSection(0, getBounds)).toBe('hero');
    expect(resolveActiveSection(100, getBounds)).toBe('hero');
  });

  it('highlights platform / pricing / faq when inside their ranges', () => {
    const getBounds = (id) =>
      ({
        platform: { top: 800, height: 400 },
        pricing: { top: 1400, height: 400 },
        faq: { top: 2000, height: 400 },
      })[id] || null;

    expect(resolveActiveSection(800, getBounds, 0)).toBe('platform');
    expect(resolveActiveSection(1400, getBounds, 0)).toBe('pricing');
    expect(resolveActiveSection(2000, getBounds, 0)).toBe('faq');
  });
});

describe('createRafThrottledHandler (Review #29)', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('coalesces multiple scroll ticks into one rAF callback', () => {
    const rafQueue = [];
    vi.stubGlobal('requestAnimationFrame', (cb) => {
      rafQueue.push(cb);
      return rafQueue.length;
    });

    const handler = vi.fn();
    const onScroll = createRafThrottledHandler(handler);
    onScroll();
    onScroll();
    onScroll();
    expect(handler).not.toHaveBeenCalled();
    expect(rafQueue).toHaveLength(1);
    rafQueue[0]();
    expect(handler).toHaveBeenCalledTimes(1);
  });
});

describe('waitForSectionThenScroll (Review #19)', () => {
  it('waits until the section exists before scrolling (no fixed 120ms race)', () => {
    const scheduleQueue = [];
    const schedule = (fn) => scheduleQueue.push(fn);
    const performScroll = vi.fn();
    let el = null;

    waitForSectionThenScroll('pricing', {
      getElementById: (id) => (id === 'pricing' ? el : null),
      performScroll,
      schedule,
      maxAttempts: 10,
    });

    expect(performScroll).not.toHaveBeenCalled();
    scheduleQueue.shift()(); // attempt 0 — missing
    expect(performScroll).not.toHaveBeenCalled();
    el = { id: 'pricing' };
    scheduleQueue.shift()(); // attempt 1 — ready
    expect(performScroll).toHaveBeenCalledWith('pricing');
  });

  it('scrolls hero immediately without requiring an element', () => {
    const schedule = (fn) => fn();
    const performScroll = vi.fn();
    waitForSectionThenScroll('hero', {
      getElementById: () => null,
      performScroll,
      schedule,
    });
    expect(performScroll).toHaveBeenCalledWith('hero');
  });
});

describe('computeScrollProgress', () => {
  it('returns 0 when document is not scrollable', () => {
    expect(computeScrollProgress(50, 800, 800)).toBe(0);
  });
});
