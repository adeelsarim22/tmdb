import { lazy } from "react";
import { Route } from "react-router-dom";

import urls from "constants/urls";
import RequireAuth from "./RequireAuth";

const Dashboard = lazy(() => import("views/Home/Dashboard"));
const Signin = lazy(() => import("views/Auth/Signin/Signin"));
const Signup = lazy(() => import("views/Auth/Signup/Signup"));
const DetailsPage = lazy(() => import("views/MediaDetails/MediaDetails"));
const Search = lazy(() => import("views/Search/SearchedMedia"));

const appRoutes = [
  {
    path: urls.signin,
    component: <Signin />,
  },
  {
    path: urls.signup,
    component: <Signup />,
  },
  {
    path: urls.dashboard,
    component: <Dashboard />,
  },
  {
    path: urls.tvDetails,
    component: <DetailsPage />,
  },
  {
    path: urls.movieDetails,
    component: <DetailsPage />,
  },
  {
    path: urls.search,
    component: <Search />,
  },
];

export const switchRoutes = () =>
  appRoutes.map((route) => {
    if (route.isAuth)
      return (
        <Route element={<RequireAuth />} key={route.path}>
          <Route path={route.path} element={route.component} />
        </Route>
      );

    return (
      <Route path={route.path} key={route.path} element={route.component} />
    );
  });
