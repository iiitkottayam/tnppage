import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

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
  item: {
    flexGrow: 1,
  },
  title: {
    fontSize: 40,
    color: "#FFFF",
    textAlign: "left",
  },
  body: {
    font: "1.8rem/1.4 Georgia, seri",
    fontSize: 20,
    color: "#FFFF",
    overflowY: "scroll",
    height: "auto",
    padding: "1rem",
    textAlign: "justify",
  },
  card: {
    marginLeft: "auto",
    marginRight: "auto",
    height: "auto",
    backgroundColor: "transparent",
    "&:hover": {
      backgroundColor: "#06326b",
      transition: "1s",
    },
    [theme.breakpoints.up("lg")]: {
      marginLeft: "25%",
      marginRight: "25%",
    },
    "& :nth-child(1)": {
      backgroundColor: "transparent",
      "&:hover": {
        backgroundColor: "#0346f2",
        transition: "1s",
      },
    },
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
        <Typography className={classes.title2}>Why Recruit?</Typography>
        <hr width="40%" color="white" align="center"></hr>
      </div>
      <br />
        <br />
      <Card data-aos="fade-in" className={classes.card} margin-top="20px">
        <CardContent>
          <Typography className={classes.title}>
            <b>Potential Par Excellence</b>
          </Typography>
          <hr width="30%" color="white" align="left"></hr>

          <Typography className={classes.body}>
            <p>
              The students in IIIT Kottayam are selected on the basis of their
              ranks in the prestigious JEE Mains exam. And the students entering
              are in the top 2-3% of the candidates appearing in the
              examination. Hence the amount of potential in the students is
              unparalleled.
            </p>
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.card} data-aos="fade-in" data-aos-offset="200">
        <CardContent>
          <Typography className={classes.title}>
            <b>World Class Curriculum</b>
          </Typography>
          <hr width="30%" color="white" align="left"></hr>

          <Typography className={classes.body}>
            <p>
              The academic curriculum of this institute is one of the best in
              the country, and is dynamic enough to kepp up with the evolution
              of technology and industry. The institute also enjoys the presence
              of world class faculty with their vast knowledge and extensive
              research experience, which in turn has created a stream of
              supremely talented and inquisitive students.
            </p>
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.card} data-aos="fade-in" data-aos-offset="200">
        <CardContent>
          <Typography className={classes.title}>
            <b>Brilliant Coding Culture</b>
          </Typography>
          <hr width="30%" color="white" align="left"></hr>

          <Typography className={classes.body}>
            <p>
              The coding club conducts weekly sessions covering multiple
              domains; Competitive Programming, Web Development, Open Source
              Tools and Machine Learning being a few of them. This has paved a
              path towards excellence, which has resulted in students securing
              top positions in multiple national and international hackathons,
              coding competitions and a lot more. Whether it's GSOC, or research
              internships in other premier institutes, our students have
              achieved it all.
            </p>
          </Typography>
        </CardContent>
      </Card>
      <div></div>
    </div>
  );
}
