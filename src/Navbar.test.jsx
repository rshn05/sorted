/**
 * Review #17 — mobile menu closes on section navigation.
 */
import React from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from './Navbar.jsx';

describe('Navbar mobile menu (Review #17)', () => {
  beforeEach(() => {
    vi.spyOn(window, 'scrollTo').mockImplementation(() => {});
  });

  it('closes the mobile menu when a section link is clicked', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Navbar />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByRole('button', { name: /toggle menu/i }));
    expect(screen.getByTestId('mobile-menu')).toBeInTheDocument();

    fireEvent.click(
      within(screen.getByTestId('mobile-menu')).getByRole('button', {
        name: /^pricing$/i,
      })
    );

    expect(screen.queryByTestId('mobile-menu')).not.toBeInTheDocument();
  });
});
