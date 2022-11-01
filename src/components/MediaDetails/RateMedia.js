import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { toast } from 'react-toastify';

import CardRatings from "components/shared/CardRatings";
import { rateMedia } from "services/moviesService";
import { GRAY9, NEVADA, WHITE } from "constants/colors";
import UserContext from "context/userContext";
import urls from "constants/urls";

const RateMedia = ({ isMobile }) => {
  const params = useParams();
  const user = useContext(UserContext);
  const [rating, setRating] = useState(0);
  const [mediaType, setMediaType] = useState("");

  useEffect(() => {
    if (location.pathname.includes("movie")) setMediaType("movie");
    else setMediaType("tv");
  }, []);

  const handleChange = async (val) => {
    try {
      await rateMedia(mediaType, params.id, val * 2);
      toast.success('Thanks for rating!');
      setRating(val);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Box
      sx={{
        my: 5,
        borderRadius: 4,
        display: "flex",
        background: GRAY9,
        p: 2,
        flexDirection: `${ isMobile ? 'column' : 'row' }`
      }}
    >
      <Typography variant="h6" color={NEVADA} minWidth={200} flexGrow={1}>
        Submit your ratings
      </Typography>
      {user && (
        <CardRatings
          averageScore={rating}
          readOnly={false}
          onRatingChange={handleChange}
          size="large"
          color={WHITE}
          starColor={WHITE}
        />
      )}
      {!user && (
        <Link
          style={{ textTransform: "capitalize", fontSize: 18, color: WHITE, textDecoration: 'none' }}
          to={urls.signin}
        >
          Sign in to give rating
        </Link>
      )}
    </Box>
  );
};
export default RateMedia;
