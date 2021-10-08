import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import reg from "../../static/registrar.png";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: "linear-gradient(0deg, #408ef5 9.66%, #0d3b78 94.35%)",
  },
  subContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    boxShadow: "inset 0 0 0 2000px rgba(0,0,0,0.2)",
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
    height: "50vh",
    padding: "1rem",
    textAlign: "justify",
  },
  card: {
    marginLeft: "15%",
    marginRight: "15%",
    backgroundColor: "transparent",
    "&:hover": {
      backgroundColor: "#06326b",
      transition: "1s",
    },
    [theme.breakpoints.up("lg")]: {
      marginLeft: "25%",
      marginRight: "25%",
    },
    "&>:nth-child(n)": {
      backgroundColor: "transparent",
    "&:hover": {
      backgroundColor: "#0346f2",
      transition: "1s",
    },
  }

  },
}));

export default function Index() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.subContainer}>
        <Card data-aos="fade-in" data-aos-offset="400" className={classes.card}>
          <CardContent>
            <Typography className={classes.title}>
              <b>About Us</b>
            </Typography>
            <hr width="90%" color="white" align="left"></hr>

            <Typography className={classes.body}>
                <p>
                  IIIT Kottayam is an <b>Institute of National Importance </b>
                  established in 2015. It is also one amongst 20 new IIITs that
                  have been proposed to be established across the country. The
                  institute is fueled with the unified desire of its students,
                  faculty and administration to incubate world class engineers.
                </p>
                <p>
                  Despite its rough beginning, IIIT Kottayam in the 5 years of
                  its inception has grown strides, as made evident by its newly
                  established sprawling permanent campus spanning 53 acres and
                  our students who have managed to bag placement packages of
                  upto 36 lakhs per annum.
                </p>
                <p>
                  The institution offers B.Tech and B.Tech / MS , Ph.D. courses
                  in 'Computer Science and Engineering' and 'Electronics and
                  Communication'.
                </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
      <div className={classes.subContainer}>
        <Card className={classes.card} data-aos="fade-in">
          <CardContent>
            <img
              src={reg}
              data-aos="slide-left"
              data-aos-offset="400"
              height="30%"
              width="30%"
              border-radius= "20px"
              alt="Radhakrishnan sir."
            ></img>

            <Typography className={classes.title}>
              <b>From the Registrar's Desk</b>
            </Typography>
            <hr width="90%" color="white" align="left"></hr>

            <Typography className={classes.body}>
              <p>
                <b>" </b>Indian Institute of Information Technology, Kottayam,
                is a budding institute bound to reach heights, the likes of
                which have never been seen before.
              </p>
              <p>
                {" "}
                Among its contemporaries, the institute is the only one, blessed
                with its <b>own permanent campus</b>. World class facilities are
                provided to both teachers and students, in order to ensure that
                the primary objective of education is never pushed below by
                presence of trivial issues.
              </p>

              <p>
                Separate hostel accommodation is provided for boys and girls.
                All the hostels have com- mon rooms, 24 hour Wi-Fi-connectivity
                and recreational centers where newspapers, magazines and TVs are
                available. Round the clock water and electricity is provided.
                Laundry equipment is also available in the hostels. Retired army
                personals (with minimum 15 years of experience in army) through
                Army Welfare Placement Organization (AWPO) are deployed for
                taking care of security of entire IIIT Kottayam.
              </p>
              <p>
                The campus is equipped with an internet band width of 1 Gbps
                with Wi-Fi access, thanks to the service of the{" "}
                <b>National Knowledge Network</b> that our institute enjoys.
                Internet connectivity is also extended to Boys and Girls hostels
                with no restriction on timing or limit for the internet usage.
              </p>
              <p>
                A state of art, Gymnasium nourishes several enthusiasts to
                develop their fitness & sports activities. Institute has access
                to round the clock medical facilities. A fully equipped
                ambulance handles emergency cases. Medical facilities are given
                vital importance and each student is given complete care.
              </p>
              <p>
                And this is not the end, for the facilities are continuously
                improving and being added in order to ensure the comfort of
                those, who represent what the foundation of this institution is
                built upon; the brilliance of students.<b> "</b>
              </p>
            </Typography>
          </CardContent>
        </Card>
        </div>
      </div>
  );
}