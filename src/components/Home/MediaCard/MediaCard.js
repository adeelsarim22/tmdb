import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Card, CardMedia } from "@mui/material";

import CardDetails from "components/Home/CardDetails/CardDetails";
import CardRatings from "components/shared/CardRatings";
import { GET_CARD_IMAGE_LINK } from "utils/helpers";

const MediaCard = ({ movie, mediaType, isMobile }) => {
  const navigate = useNavigate();

  const navigateToMediaDetails = () => {
    navigate(`/${movie.media_type || mediaType}/${movie.id}`);
  };

  return (
    <>
      <Card
        sx={{ borderRadius: 4, cursor: "pointer", minWidth: `${isMobile ? '100%' : '25%'}`, minHeight: `${isMobile ? '100%' : '25%'}` }}
        onClick={navigateToMediaDetails}
      >
        <CardMedia
          component="img"
          alt="Movie Image"
          image={GET_CARD_IMAGE_LINK(movie.backdrop_path)}
        />
        <CardDetails
          movieName={movie.title || movie.name}
          releaseDate={movie.first_air_date || movie.release_date}
        />
        <Box sx={{ marginBottom: 1 }}>
          <CardRatings averageScore={movie.vote_average} isMobile={isMobile} />
        </Box>
      </Card>
    </>
  );
};

export default MediaCard;
