import React from "react";
import { Container, Typography } from "@mui/material";

import MovieSearchForm from "./MediaSearchForm";
import { FORM_HEADER_TITLE } from "constants/constants";
import { BLACK } from "constants/colors";

const SearchFormSection = () => {
  return (
    <Container maxWidth={false} sx={{ pb: 6 }}>
      <Typography
        variant="h4"
        p={2}
        color={BLACK}
        textAlign='center'
      >
        {FORM_HEADER_TITLE}
      </Typography>
      <MovieSearchForm />
    </Container>
  );
};

export default SearchFormSection;
