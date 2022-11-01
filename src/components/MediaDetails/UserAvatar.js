import { Avatar } from "@mui/material";

import { NAVY_BLUE_HEXA } from "constants/colors";
import { GET_CARD_IMAGE_LINK } from "utils/helpers";

const avatarStyle = {
  backgroundColor: NAVY_BLUE_HEXA,
  width: 90,
  height: 90,
  fontSize: 42,
};

const UserAvatar = ({ avatar, author }) => {
  return (
    <Avatar
      alt="User Avatar"
      src={GET_CARD_IMAGE_LINK(avatar)}
      sx={avatarStyle}
    >
      {author.slice(0, 1)}
    </Avatar>
  );
};

export default UserAvatar;
