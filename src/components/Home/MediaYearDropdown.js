import React from "react";
import { DatePicker } from "@mui/x-date-pickers";
import { TextField, FormControl } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { ORANGE_HEXA, WHITE } from "constants/colors";

const MediaYearDropdown = ({
  onSetSelectedYear,
  selectedYear,
}) => {
  return (
    <FormControl
      sx={{
        width: "25%",
        minWidth: "200px",
        m: 1,
      }}
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          views={["year"]}
          label="Year"
          value={selectedYear}
          onChange={(newValue) => {
            onSetSelectedYear(newValue);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              helperText={null}
              sx={{
                backgroundColor: WHITE,
                borderRadius: 1,
                color: ORANGE_HEXA,
              }}
            />
          )}
          sx={{ m: 1 }}
        />
      </LocalizationProvider>
    </FormControl>
  );
};

export default MediaYearDropdown;
