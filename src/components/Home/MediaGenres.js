import React, { useState, useEffect } from "react";
import { InputLabel, FormControl, Select, MenuItem } from "@mui/material";

import { fetchGenres } from "services/moviesService";
import { GENERES_DROP_DOWN_LABEL } from "constants/constants";

const MediaGenres = ({ genresType, onSetGenresType }) => {
  const [genresList, setGenreList] = useState([]);

  const getGenres = async () => {
    try {
      const { data } = await fetchGenres();
      setGenreList(data.genres);
      onSetGenresType(data.genres[0].id);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (e) => {
    onSetGenresType(e.target.value);
  };

  useEffect(() => {
    getGenres();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <FormControl sx={{ width: "25%", minWidth: "200px", m: 1 }}>
      <InputLabel>{GENERES_DROP_DOWN_LABEL}</InputLabel>
      <Select
        value={genresType}
        onChange={handleChange}
        label={GENERES_DROP_DOWN_LABEL}
      >
        {genresList.map((item) => (
          <MenuItem key={item.id} value={item.id}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default MediaGenres;
