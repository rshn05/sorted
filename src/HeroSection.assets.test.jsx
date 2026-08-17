/**
 * Review #3 — Hero emoji assets: optimized formats, loading, CLS dimensions.
 */
import React from 'react';
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import HeroSection from './HeroSection.jsx';

const dir = dirname(fileURLToPath(import.meta.url));
const heroSourcePath = join(dir, 'HeroSection.jsx');
const emojiDir = join(dir, 'assets', 'images', 'emoji');

function readHeroSource() {
  return readFileSync(heroSourcePath, 'utf8');
}

function renderHero() {
  const router = createMemoryRouter(
    [
      { path: '/', element: <HeroSection /> },
      { path: '/signup', element: <div>Signup page</div> },
      { path: '/contact', element: <div>Contact page</div> },
    ],
    { initialEntries: ['/'] }
  );
  const view = render(<RouterProvider router={router} />);
  return { ...view, router };
}

describe('HeroSection hero emoji assets (Review #3)', () => {
  it('imports optimized WebP emoji assets and not oversized PNGs', () => {
    const source = readHeroSource();

    for (let i = 1; i <= 7; i += 1) {
      expect(source).toContain(`./assets/images/emoji/${i}.webp`);
      expect(source).not.toContain(`./assets/images/emoji/${i}.png`);
    }
  });

  it('keeps production WebP files that are appropriately sized for display', () => {
    const webpFiles = readdirSync(emojiDir).filter((name) => name.endsWith('.webp'));
    expect(webpFiles.sort()).toEqual([
      '1.webp',
      '2.webp',
      '3.webp',
      '4.webp',
      '5.webp',
      '6.webp',
      '7.webp',
    ]);

    for (const name of webpFiles) {
      const size = statSync(join(emojiDir, name)).size;
      // Max display is 72px; 144px WebP should stay well under 50KB each.
      expect(size).toBeLessThan(50 * 1024);
      expect(size).toBeGreaterThan(500);
    }
  });

  it('does not ship obsolete hero emoji PNG sources', () => {
    for (let i = 1; i <= 7; i += 1) {
      expect(existsSync(join(emojiDir, `${i}.png`))).toBe(false);
    }
  });

  it('renders hero copy, CTAs, and decorative emoji images with stable loading attrs', () => {
    renderHero();

    expect(
      screen.getByRole('heading', { name: /Sortted — AI content/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /at the speed of thought/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/AI content platform for marketers, agencies, startups/i)
    ).toBeInTheDocument();

    const getStarted = screen.getByRole('button', { name: /Get started for free/i });
    const requestDemo = screen.getByRole('button', { name: /Request a demo/i });
    expect(getStarted).toBeInTheDocument();
    expect(requestDemo).toBeInTheDocument();

    const emojiImgs = document.querySelectorAll('.hero-character img');
    expect(emojiImgs).toHaveLength(7);

    emojiImgs.forEach((img) => {
      expect(img.getAttribute('alt')).toBe('');
      expect(img.getAttribute('loading')).toBe('eager');
      expect(img.getAttribute('decoding')).toBe('async');
      expect(img.getAttribute('width')).toBe('144');
      expect(img.getAttribute('height')).toBe('144');
      expect(img.getAttribute('src')).toBeTruthy();
      expect(img.getAttribute('src')).not.toMatch(/\.png($|\?)/i);
      expect(img.getAttribute('src')).toMatch(/\.webp/i);
    });

    expect(emojiImgs[0].getAttribute('fetchpriority')).toBe('high');
  });

  it('keeps existing CTA navigation targets', () => {
    const { router } = renderHero();

    fireEvent.click(screen.getByRole('button', { name: /Get started for free/i }));
    expect(router.state.location.pathname).toBe('/signup');
  });

  it('keeps existing Request a demo navigation target', () => {
    const { router } = renderHero();

    fireEvent.click(screen.getByRole('button', { name: /Request a demo/i }));
    expect(router.state.location.pathname).toBe('/contact');
  });
});
