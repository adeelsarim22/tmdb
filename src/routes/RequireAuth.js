import React, { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import urls from "constants/urls";

import UserContext from "context/userContext";

const RequireAuth = () => {
  let location = useLocation();
  const user = useContext(UserContext);

  if (!user) return <Navigate to={urls.signin} state={{ from: location }} />;

  return <Outlet />;
};

export default RequireAuth;
