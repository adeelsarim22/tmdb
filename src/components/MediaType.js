import React, { useState } from "react";
import { InputLabel, FormControl, Select, MenuItem } from "@mui/material";

import { MediaTypes } from "constants/mediaTypes";
import { ORANGE_HEXA, WHITE } from "constants/colors";

const MediaType = () => {
  const [mediaList, setMediaList] = useState(MediaTypes);

  const handleChange = (e) => setMediaList(e.target.value);

  const getGenresLabel = () => (
    <InputLabel
      sx={{
        "&.Mui-focused": {
          color: ORANGE_HEXA,
          fontSize: "25px",
          fontWeight: "700",
          textAlign: "start",
          lineHeight: "1.8em",
        },
        fontSize: "18px",
        fontWeight: "700",
        color: ORANGE_HEXA,
      }}
      id="genres-select-dropdown"
    >
      Select Media Type
    </InputLabel>
  );

  return (
    <FormControl sx={{ width: "25%", minWidth: "200px", m: 1 }}>
      {getGenresLabel()}
      <Select
        labelId="media-select-dropdown"
        id="media-select-dropdown"
        value={mediaList[0].name}
        label="Select Genres"
        onChange={handleChange}
        sx={{
          backgroundColor: WHITE,
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
        }}
      >
        {mediaList.map((item) => (
          <MenuItem key={item.id} value={item.id}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default MediaType;
