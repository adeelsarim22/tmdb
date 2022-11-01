import React from "react";
import StarIcon from "@mui/icons-material/Star";
import { Typography, Container, Rating } from "@mui/material";

import { GET_RATING_SATRS, GET_RATING_SCORE } from "utils/helpers";

const CardRatings = ({
  averageScore,
  readOnly = true,
  onRatingChange = () => {},
  size = "small",
  color,
  starColor,
  isMobile
}) => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: `${isMobile ? 'column' : 'row'}`
      }}
      maxWidth={false}
    >
      <Rating
        name="text-feedback"
        value={readOnly ? parseInt(GET_RATING_SATRS(averageScore)) : parseInt(averageScore)}
        readOnly={readOnly}
        precision={0.5}
        size={size}
        onChange={(event, newValue) => {
          onRatingChange(newValue);
        }}
        emptyIcon={
          <StarIcon
            style={{ opacity: 0.55, outline: color, color: starColor }}
            fontSize="inherit"
          />
        }
      />
      <Typography variant="p" sx={{ fontWeight: "bold", color: color }}>
        {readOnly && GET_RATING_SCORE(averageScore)}
      </Typography>
    </Container>
  );
};

export default CardRatings;
