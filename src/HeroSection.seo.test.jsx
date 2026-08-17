/**
 * Review #20 — Hero H1 / SEO messaging includes product context.
 */
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

vi.mock('./heroParticleRuntime.js', () => ({
  shouldRunHeroParticles: () => false,
  createHeroParticleRuntime: () => ({
    start: () => {},
    stop: () => {},
    destroy: () => {},
  }),
}));

import HeroSection from './HeroSection.jsx';

describe('HeroSection SEO (Review #20)', () => {
  it('uses an H1 that names Sortted and content positioning', () => {
    render(
      <MemoryRouter>
        <HeroSection />
      </MemoryRouter>
    );

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading.textContent).toMatch(/Sortted/i);
    expect(heading.textContent).toMatch(/AI content/i);
    expect(heading.textContent).toMatch(/speed of thought/i);
  });
});
