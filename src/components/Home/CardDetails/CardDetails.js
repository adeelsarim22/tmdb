import React from "react";
import { CardContent, Typography } from "@mui/material";

import { truncate } from "utils/helpers";

const CardDetails = ({ movieName, releaseDate }) => {
  return (
    <CardContent>
      <Typography
        gutterBottom
        variant="p"
        component="div"
        sx={{ fontWeight: "bold" }}
      >
        {truncate(movieName, 30)}
      </Typography>
      <Typography variant="p" color="text.secondary">
        {releaseDate}
      </Typography>
    </CardContent>
  );
};
export default CardDetails;
