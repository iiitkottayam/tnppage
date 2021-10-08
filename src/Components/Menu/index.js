import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import { ListItem } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    width: "80%",
    minHeight: 40,
    flexDirection: 'row',
    alignItems: "flex-end",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    gap: "auto",
  },
  appbar: {
    display: "flex",
    background: "#022f61",
    boxShadow:'inset 0 0 0 2000px rgba(0,0,0,0)',
    flexDirection: 'row',
    gap:"auto"
  },
  menuButton: {
    color: "grey",
    "&:hover": {
      color: "white",
      transition: "0.6s",
    },
    "&:active": {
      color: "green",
    },
    fontWeight: "bold",
    alignSelf: "auto"
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  logo: {
    height: "80px",
    marginRight: "0.5em"
  }
}));

export default function Index(props) {
  const theme = useTheme();
  const classes = useStyles();
  // const router = useRouter();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const [open, setOpen] = useState(false);

  const comp = matches ? (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <Button className={classes.menuButton}>Home</Button>
          <Button className={classes.menuButton} href="AboutUs">About Us</Button>
          <Button className={classes.menuButton}>Why Recruit</Button>
          <Button className={classes.menuButton}>Recruitment Process</Button>
          <Button className={classes.menuButton}>For Companies</Button>
          <Button className={classes.menuButton}>Contact Us</Button>
        </Toolbar>
      </AppBar>
    </div>
  ) : (
    <div>
      <IconButton
        edge="start"
        color="primary"
        aria-label="open drawer"
        onClick={() => setOpen(true)}
      >
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => {}}
      >
        <div className={classes.list}>
          <Divider />
          <List>
            <ListItem button>
              <ListItemText primary={"Home"} />
            </ListItem>
            <ListItem button>
              <ListItemText primary={"About Us"} />
            </ListItem>
            <ListItem button>
              <ListItemText primary={"Why Recruit"} />
            </ListItem>
            <ListItem button>
              <ListItemText primary={"Recruitment Process"} />
            </ListItem>
            <ListItem button>
              <ListItemText primary={"For Companies"} />
            </ListItem>
            <ListItem button>
              <ListItemText primary={"Contact Us"} />
            </ListItem>
          </List>
        </div>
      </SwipeableDrawer>
    </div>
  );
  return comp;
}
