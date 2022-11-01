/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import DetailsPage from '../MediaDetails';

describe('load MediaDetails view', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <DetailsPage />
      </MemoryRouter>
    );
  })
  it('loads the MediaInfo component', async () => {
      expect(screen.queryAllByText('Overview').length).toBeGreaterThan(0);
      expect(screen.queryAllByText('Ratings').length).toBeGreaterThan(0);
      expect(screen.getAllByAltText('Movie Image').length).toBeGreaterThan(0);
      expect(screen.queryAllByText('Submit your ratings').length).toBeGreaterThan(0);
  });

  it('loads the CardRatings component', async () => {
    expect(screen.queryAllByText('Submit your ratings').length).toBeGreaterThan(0);
    expect(screen.queryAllByText('Sign in to give rating').length).toBeGreaterThan(0);
  });

  it('loads the MediaReviews component with no reviews', async () => {
    expect(screen.queryAllByText('No Reviews Yet').length).toBeGreaterThan(0);
  });
});
