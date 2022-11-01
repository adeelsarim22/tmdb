/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Dashboard from '../Dashboard';

describe('loads Dashboard view', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Dashboard />
      </MemoryRouter>
    );
  })
  it('loads the SearchedMedia component', async () => {
      expect(screen.queryAllByText('Search').length).toBeGreaterThan(0);
      expect(screen.queryAllByText('Select Genres').length).toBeGreaterThan(0);
      expect(screen.queryAllByText('Select Media Type').length).toBeGreaterThan(0);
  });

  it('loads the last week popular movies component', async () => {
    expect(screen.queryAllByText(`Last Week's Popular Movies`).length).toBe(0);
  });

  it('should not render last week popular movie', async () => {
    expect(screen.queryAllByText('No Results Found').length).not.toBeGreaterThan(0);
  });
});
