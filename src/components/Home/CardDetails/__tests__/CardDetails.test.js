/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Movie } from "components/Store/Movie";
import CardDetails from "../CardDetails";

describe("loads the component", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <CardDetails movieName={Movie.title} releaseDate={Movie.release_date} />
      </MemoryRouter>
    );
  });

  it("renders the correct title and release date", () => {
    expect(screen.getAllByText(Movie.title)).toBeInTheDocument;
    expect(screen.getAllByText(Movie.release_date)).toBeInTheDocument;
  });

  it("doesnt render wrong title", () => {
    expect(screen.queryByText("test title")).not.toBeInTheDocument;
  });
});
