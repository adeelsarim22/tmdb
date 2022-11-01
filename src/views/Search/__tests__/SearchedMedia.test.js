/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SearchedMedia from '../SearchedMedia';

describe('load SearchedMedia view', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <SearchedMedia />
      </MemoryRouter>
    );
  });

  it('loads the SearchFormSection component', async () => {
      expect(screen.queryAllByText('Select Media Type').length).toBeGreaterThan(0);
      expect(screen.queryAllByText('Search').length).toBeGreaterThan(0);
  });

  it('should not load MediaGridList component with no results', async () => {
    expect(screen.queryAllByText('No Results Found').length).not.toBeGreaterThan(0);
  });
});
