import "./App.css";
import "@material-ui/core";
import Menu from "./Components/Menu";
import AboutUs from "./Components/AboutUs";
import WhyRecruit from "./Components/WhyRecruit";
import RecruitmentProcess from "./Components/RecruitmentProcess";
import Footer from "./Components/Footer"
import PastRecruiters from "./Components/PastRecruiters";
import "@fontsource/roboto";
import { makeStyles } from "@material-ui/core";
import bg from "./static/bg1.jpg";
import logo from "./static/logo3.png";
const useStyles = makeStyles((theme) => ({
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.5em'
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 5px rgba(0,0,0,0.00)'
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: '#4fc26f',
      outline: '1px solid slategrey'
    },
    '*::-webkit-scrollbar-thumb:hover': {
      backgroundColor: '#434231',
      outline: 'transparent'
    }
  },
  root: {
    backgroundImage: `url(${bg}),linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.5))`,
    background: 'no-repeat center center fixed',
    backgroundBlendMode: "overlay",
    minHeight: "100vh",
    height:"100%",
    backgroundSize: "cover",
  },
  image: {
    display: "block",
    marginTop: "60px",
    marginLeft: "auto",
    marginRight: "auto",
    width: "50%",
    opacity: "1",
    [theme.breakpoints.up('lg')]: {
      width: "30%",
    },
    [theme.breakpoints.up(500)]: {
      marginTop: "60px"
    },
    [theme.breakpoints.down(500)]: {
      marginTop: "auto"
    }
  },

  imgcont: {
    
    height: "100vh",
    boxShadow: "inset 0 0 0 2000px rgba(0,0,0,0.2)",
  },

  title: {
    fontSize: 30,
    color: "#FFFF",
    textAlign: "center",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Menu />
      <div className={classes.imgcont}>
        <img
          src={logo}
          className={classes.image}
          alt="IIIT Kottayam Logo."
        ></img>
      </div>
      <AboutUs />
      <WhyRecruit/>
      <RecruitmentProcess/>
      <PastRecruiters/>
      <Footer/>
    </div>
  );
}

export default App;
