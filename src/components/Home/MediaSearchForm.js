import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container } from "@mui/material";

import MediaGenres from "./MediaGenres";
import SelectMediaType from "./SelectMediaType";
import MediaYearDropdown from "./MediaYearDropdown";
import { SEARCH_MOVIE } from "constants/constants";
import { BLACK, WHITE } from "constants/colors";
import { searchOptions } from "constants/searchOptions";

const MediaSearchForm = () => {
  const navigate= useNavigate();
  const [genresType, setGenresType] = useState("");
  const [selectedYear, setSelectedYear] = useState(new Date());
  const [selectedMediaType, setSelectedMediaType] = useState(
    searchOptions[0].value
  );

  const isSearchDisabled = useMemo(
    () => !genresType || !selectedYear || !selectedMediaType,
    [genresType, selectedMediaType, selectedYear]
  );

  const handleSubmitForm = async () => {
    const year = selectedYear.toString().split(" ")[3];
    navigate({
      pathname: '/search',
      search: `?genre=${genresType}&year=${year}&media=${selectedMediaType}`
    })
  };

  const formSubmitButton = () => {
    return (
      <Button
        variant="contained"
        disabled={isSearchDisabled}
        size="large"
        sx={{
          color: isSearchDisabled ? BLACK : WHITE,
          p: 2,
          borderRadius: 2,
          marginBottom: 3,
        }}
        onClick={handleSubmitForm}
      >
        {SEARCH_MOVIE}
      </Button>
    );
  };

  const handleGenreChange = val => setGenresType(val);
  const handleSelectedYear = val => setSelectedYear(val);
  const handleSelectedMediaType = val => setSelectedMediaType(val);

  return (
    <>
      <form>
        <Container
          maxWidth={false}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          <MediaGenres
            genresType={genresType}
            onSetGenresType={handleGenreChange}
          />
          <MediaYearDropdown
            selectedYear={selectedYear}
            onSetSelectedYear={handleSelectedYear}
          />
          <SelectMediaType
            selected={selectedMediaType}
            onSetSelected={handleSelectedMediaType}
          />
        </Container>
        <Container sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          {formSubmitButton()}
        </Container>
      </form>
    </>
  );
};

export default MediaSearchForm;
