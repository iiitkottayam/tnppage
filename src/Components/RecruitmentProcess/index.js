import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Chrono } from "react-chrono";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
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
  title: {
    fontSize: 40,
    textAlign: "left",
    color: "white"
  },
  body: {
    fontSize: 15,
    color: "#FFFF",
    padding: "5px"
  },
  title2: {
    font: "4rem/1.2 Georgia, seri",
    color: "white",
    padding: "10px",
  },
  timeline: {
    width: "80%",
    height: "auto",
  },
}));

export default function Index() {
  const classes = useStyles();
  const items = [];
  return (
    <div className={classes.container}>
      <div className={classes.subContainer}>
        <Typography className={classes.title2}>Recruitment Process</Typography>
        <hr width="40%" color="white" align="center"></hr>
      </div>
      <div className={classes.timeline}>
        <Chrono
          items={items}
          mode="VERTICAL_ALTERNATING"
          hideControls="true"
          borderLessCards="true"
          useReadMore="false"
          theme={{ primary: "red", secondary: "yellow", cardBgColor: "#045482" }}
        >
          <div data-aos="slide-left">
            <h1 className={classes.title}>Invited!</h1>
            <h2 className={classes.body}>
              The invitations are sent to companies along with the relevant
              info.
            </h2>
          </div>
          <div data-aos="slide-right">
            <h1 className={classes.title}>Register!</h1>
            <h2 className={classes.body}>
              Companies register through the internship/job announcement form.
            </h2>
          </div>
          <div data-aos="slide-left">
            <h1 className={classes.title}>Coordinate!</h1>
            <h2 className={classes.body}>
              If the company is accepted, a Student Coordinator will be
              allocated to company.
            </h2>
          </div>
          <div data-aos="slide-right">
            <h1 className={classes.title}>Test!</h1>
            <h2 className={classes.body}>
              The hiring process is carried out by the company, including
              Interviews, Written Tests, Pre Placement Talks, Coding Tests
              and/or any other selection round.
            </h2>
          </div>
          <div data-aos="slide-left">
            <h1 className={classes.title}>Selected!</h1>
            <h2 className={classes.body}>
              Students are selected and companies roll out offers to hire them.
            </h2>
          </div>
        </Chrono>
      </div>
    </div>
  );
}
