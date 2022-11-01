import { Pagination } from "@mui/material";

import { WHITE } from "constants/colors";

const PaginationComponent = ({ pageCount, onChange, isMobile, page }) => {
  return (
    <Pagination
      count={pageCount}
      size={`${isMobile ? 'small' : 'large'}`}
      sx={{ m: isMobile ? 2 : 4, button: { color: WHITE } }}
      onChange={onChange}
      color="primary"
      page={page}
    />
  );
};
export default PaginationComponent;
