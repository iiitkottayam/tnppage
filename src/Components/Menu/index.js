import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import bg from '../../static/bg.jpg';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    minHeight: 40,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  appbar: {
    background:'transparent',
    boxShadow:"inset 0 0 0 2000px rgba(0,0,0,0.2)",
    alignItems: 'flex-end',
    
  },
  menuButton: {
    color: 'grey',
    '&:hover': {
      color:'white',
      transition: '0.6s'
    },
    '&:active':{
      color:'green',
    }
  },
  
}));

export default function Index() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
        <Button className={classes.menuButton}>Home</Button>
          <Button className={classes.menuButton}>About Us</Button>
          <Button className={classes.menuButton}>Why Recruit</Button>
          <Button className={classes.menuButton}>Recruitment Process</Button>
          <Button className={classes.menuButton}>For Companies</Button>
          <Button className={classes.menuButton}>Contact Us</Button>
        </Toolbar>
      </AppBar>
      <p>Hello there</p>
    </div>
  );
}
