import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Button } from "@mui/material";
import { toast } from 'react-toastify';

import { auth } from "../../firebase";
import { APP_TITLE } from "constants/constants";
import DrawerComponent from "./DrawerComponent";
import UserContext from "context/userContext";
import { GRAY9, WHITE } from "constants/colors";
import urls from "constants/urls";
import { removeSessionId } from "services/sessionService";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
    alignItems: "center",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
    color: WHITE,
    textDecoration: "none",
    fontSize: "2.5rem",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(5),
    "&:hover": {
      color: WHITE,
    },
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    flexGrow: 1,
  },
}));

function Navbar() {
  const classes = useStyles();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const user = useContext(UserContext);

  return (
    <AppBar position="static" style={{ background: GRAY9 }}>
      <CssBaseline />
      <Toolbar className={classes.navbar}>
        <Link to={urls.dashboard} className={classes.logo}>
          {APP_TITLE}
        </Link>
        {isMobile ? (
          <DrawerComponent user={user} />
        ) : (
          <div className={classes.navlinks}>
            <Link className={classes.link} to={urls.dashboard}>
              Home
            </Link>
            {!user &&
              location.pathname !== urls.signin &&
              location.pathname !== urls.signup && (
                <>
                  <Link className={classes.link} to={urls.signin}>
                    Sign In
                  </Link>
                  <Link className={classes.link} to={urls.signin}>
                    Sign Up
                  </Link>
                </>
              )}
            {user && (
              <Button
                className={classes.link}
                sx={{
                  textTransform: "capitalize",
                  color: "white",
                  fontSize: "20px",
                  marginLeft: 4,
                  p: 0,
                  textAlign: "top",
                  "&:hover": {
                    color: WHITE,
                  },
                }}
                onClick={() => {
                  auth.signOut();
                  toast.info("Signed out!");
                  removeSessionId();
                }}
              >
                Sign Out
              </Button>
            )}
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
