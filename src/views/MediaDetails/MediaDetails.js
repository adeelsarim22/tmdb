import { Divider, Container, useMediaQuery } from "@mui/material";

import MediaInfo from "components/MediaDetails/MediaInfo";
import MediaReviews from "components/MediaDetails/MediaReviews";
import { BLACK, WHITE } from "constants/colors";

const DetailsPage = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <Container
      maxWidth={false}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: BLACK,
        maxWidth: `${isMobile ? '100%' : 'auto'}`,
        padding: `${isMobile ? '0px' : 'inherit'}`
      }}
    >
      <MediaInfo color={WHITE} isMobile={isMobile} />
      <Divider />
      <MediaReviews isMobile={isMobile} />
    </Container>
  );
};

export default DetailsPage;
