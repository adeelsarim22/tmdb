/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Movie } from "components/Store/Movie";
import MediaCard from "../MediaCard";

describe("loads the component", () => {
  beforeAll(() => {
    render(
      <MemoryRouter>
        <MediaCard movie={Movie} />
      </MemoryRouter>
    );
  });

  it("renders the correct title", () => {
    expect(screen.getAllByText(Movie.title)).toBeInTheDocument;
  });

  it("doesnt render wrong title", () => {
    expect(screen.queryByText("test title")).not.toBeInTheDocument;
  });
});
