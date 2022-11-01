/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Movies } from "components/Store/Movies";
import { POPULAR_MOVIES_TITLE } from "constants/constants";
import MediaGridList from "../MediaGridList";

describe("loads the component", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <MediaGridList 
					handleChange={() => {}}
					mediaCount={Movies.length}
					mediaType={'movie'}
					moviesList={Movies}
					title={POPULAR_MOVIES_TITLE}
        />
      </MemoryRouter>
    );
  });

	it('renders all the movies in the Grid', () => {
    expect(screen.getAllByAltText('Movie Image').length).toBe(Movies.length);
	});

  it("renders the correct Details of the movies", () => {
    expect(screen.getAllByText(Movies[0].title)).toBeInTheDocument;
    expect(screen.getAllByText(Movies[0].release_date)).toBeInTheDocument;
  });

	it("does not renders the wrong Details", () => {
    expect(screen.queryAllByText('White Adam')).not.toBeInTheDocument;
    expect(screen.queryAllByText('2028')).not.toBeInTheDocument;
  });
});
