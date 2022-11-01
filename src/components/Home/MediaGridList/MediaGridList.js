import React from "react";
import { Box, Container, Typography, Grid, useMediaQuery } from "@mui/material";

import { GRAY9, NEVADA } from "constants/colors";
import Pagination from "components/shared/PaginationComponent";
import MediaCard from "components/Home/MediaCard/MediaCard";

const MediaGridList = ({ moviesList, mediaCount, onHandleChange, title, mediaType, page }) => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return moviesList.length > 0 ? (
    <Container
      sx={{ backgroundColor: GRAY9, paddingBottom: 3 }}
      maxWidth={isMobile ? 'md' : '100%'}
    >
      <Container>
        <Typography
          gutterBottom
          variant="h4"
          p={2}
          fontSize={"2rem"}
          sx={{
            color: NEVADA,
            textAlign: "center",
          }}
        >
          {title}
        </Typography>
          <Box display={"flex"} flexDirection="column" alignItems={"center"}>
            <Grid container direction="row" spacing={isMobile ? 2 : 4}>
              {moviesList.map((movie) => (
                <Grid key={movie.id} item xs={isMobile ? 6 : 3}>
                  <MediaCard movie={movie} mediaType={mediaType} isMobile={isMobile} />
                </Grid>
              ))}
            </Grid>
            {mediaCount > 1 && <Pagination page={page} pageCount={mediaCount} onChange={onHandleChange} />}
          </Box>
      </Container>
    </Container>
  ) : (
    <Box>
      <Typography textAlign={'center'} variant="h4">No Results Found</Typography>
    </Box>
  );
};

export default MediaGridList;
