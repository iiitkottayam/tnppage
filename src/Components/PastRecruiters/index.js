import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import reg from "../../static/logo.png";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    minHeight: "100vh",
    rowGap: "10px",
    alignItems: "center",
    backgroundImage: "linear-gradient(0deg, #408ef5 9.66%, #0d3b78 94.35%)",
  },
  subContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    boxShadow:
      "0 1px 1px rgba(0,0,0,0.12), 0 2px 2px rgba(0,0,0,0.12), 0 4px 4px rgba(0,0,0,0.12), 0 8px 8px rgba(0,0,0,0.12),0 16px 16px rgba(0,0,0,0.12);",
  },
  imgContainer: {
    display: "flex",
    flexWrap: "wrap",
  },
  img: {
    height: "200px",
    width: "auto",
  },
  title2: {
    font: "4rem/1.2 Georgia, seri",
    color: "white",
    padding: "10px",
  },
}));

export default function Index() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.subContainer}>
        <Typography className={classes.title2}>Past Recruiters</Typography>
        <hr width="40%" color="white" align="center"></hr>
      </div>
      <div className={classes.imgContainer}>
        <img src={reg} alt="company" class={classes.img}></img>
        <img src={reg} alt="company" class={classes.img}></img>
        <img src={reg} alt="company" class={classes.img}></img>
        <img src={reg} alt="company" class={classes.img}></img>
        <img src={reg} alt="company" class={classes.img}></img>
        <img src={reg} alt="company" class={classes.img}></img>
        <img src={reg} alt="company" class={classes.img}></img>
        <img src={reg} alt="company" class={classes.img}></img>
        <img src={reg} alt="company" class={classes.img}></img>
        <img src={reg} alt="company" class={classes.img}></img>
        <img src={reg} alt="company" class={classes.img}></img>
        <img src={reg} alt="company" class={classes.img}></img>
        <img src={reg} alt="company" class={classes.img}></img>
        <img src={reg} alt="company" class={classes.img}></img>
        <img src={reg} alt="company" class={classes.img}></img>
      </div>
    </div>
  );
}
