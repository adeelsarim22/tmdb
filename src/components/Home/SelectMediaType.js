import React from "react";
import { InputLabel, FormControl, Select, MenuItem } from "@mui/material";

import { MEDIA_TYPE } from "constants/constants";
import { searchOptions } from "constants/searchOptions";

const SelectMediaType = ({ selected, onSetSelected }) => {
  const handleChange = (e) => {
    onSetSelected(e.target.value);
  };

  return (
    <FormControl sx={{ width: "25%", minWidth: "200px", m: 1 }}>
      <InputLabel>{MEDIA_TYPE}</InputLabel>
      <Select
        value={selected}
        onChange={handleChange}
        label={MEDIA_TYPE}
      >
        {searchOptions.map((item) => (
          <MenuItem key={item.id} value={item.value}>
            {item.key}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectMediaType;
