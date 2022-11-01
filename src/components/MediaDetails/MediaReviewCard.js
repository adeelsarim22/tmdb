import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { truncate } from "utils/helpers";
import UserAvatar from "./UserAvatar";
import { GRAY9, NEVADA, WHITE } from "constants/colors";

const MediaReviewCard = ({ review, isMobile }) => {
  const [readMore, setReadMore] = useState(false);

  const toggleReadMore = () => setReadMore(!readMore);

  return (
    <Box
      sx={{
        p: 4,
        border: `1px solid ${GRAY9}`,
        background: GRAY9,
        my: 5,
        borderRadius: 4,
        maxWidth: `${ isMobile ? '100%' : 'auto' }`
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2, flexDirection: `${ isMobile ? 'column' : 'row' }` }}>
        <UserAvatar
          avatar={review.author_details.avatar_path}
          author={review.author}
        />
        <Box sx={{ display: "flex", flexDirection: "column", mx: 4 }}>
          <Typography
            variant="p"
            fontWeight={"bold"}
            fontSize={18}
            color={WHITE}
          >
            A review by{" "}
            {review.author ||
              review.author_details.name ||
              review.author_details.username}
          </Typography>
          <Typography variant="p" fontSize={14} color={NEVADA}>
            Written by{" "}
            {review.author ||
              review.author_details.name ||
              review.author_details.username}{" "}
            on{" "}
            {review.updated_at.split("T")[0] || review.created_at.split("T")[0]}
          </Typography>
        </Box>
      </Box>
      <Typography color={NEVADA} sx={{ wordBreak: 'break-all' }} >
        {readMore
          ? truncate(review.content, -1)
          : truncate(review.content, 250)}{" "}
        {review.content.split("").length > 250 && (
          <Button
            variant="text"
            sx={{ textTransform: "none", p: 0 }}
            onClick={toggleReadMore}
          >
            {!readMore ? "Read more" : "Read less"}
          </Button>
        )}
      </Typography>
    </Box>
  );
};

export default MediaReviewCard;
