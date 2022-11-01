import React, { useState } from "react";
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Button } from "@mui/material";

import { auth } from "../../firebase";
import { Link } from "react-router-dom";
import urls from "constants/urls";
import { GRAY9, WHITE } from "constants/colors";
import { removeSessionId } from "services/sessionService";

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: "none",
    color: WHITE,
    fontSize: "20px",
  },
  icon: {
    color: WHITE,
  },
  paper: {
    background: GRAY9,
    minWidth: 200,
    display: "flex",
    alignItems: "center",
  },
}));

function DrawerComponent({ user }) {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
        classes={{ paper: classes.paper }}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link className={classes.link} to={urls.dashboard}>
                Home
              </Link>
            </ListItemText>
          </ListItem>
          <Divider />
          {!user &&
            location.pathname !== urls.signin &&
            location.pathname !== urls.signup && (
              <>
                <ListItem onClick={() => setOpenDrawer(false)}>
                  <ListItemText>
                    <Link className={classes.link} to={urls.signin}>
                      Sign In
                    </Link>
                  </ListItemText>
                </ListItem>
                <Divider />
                <ListItem onClick={() => setOpenDrawer(false)}>
                  <ListItemText>
                    <Link className={classes.link} to={urls.signin}>
                      Sign Up
                    </Link>
                  </ListItemText>
                </ListItem>
                <Divider />
              </>
            )}
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              {user && (
                <Button
                  sx={{
                    textTransform: "capitalize",
                    color: "white",
                    fontSize: "20px",
                    p: 0,
                    textAlign: "top",
                    "&:hover": {
                      color: WHITE,
                    },
                  }}
                  onClick={() => {
                    auth.signOut();
                    removeSessionId();
                  }}
                >
                  Sign Out
                </Button>
              )}
            </ListItemText>
            <Divider />
          </ListItem>
        </List>
      </Drawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        className={classes.icon}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
}
export default DrawerComponent;
