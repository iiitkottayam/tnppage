import "./App.css";
import "@material-ui/core";
import Menu from "./Components/Menu";
import "@fontsource/roboto";
import { makeStyles } from "@material-ui/core";
import bg from './static/bg.jpg';
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${bg}),linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.5))`,
    backgroundBlendMode: 'overlay',
    minHeight: "100vh",
    backgroundRepeat: "no-repeat",
    // backgroundColor: "rgba(2, 2, 50)",
    flexGrow: "1",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Menu />
    </div>
  );
}

export default App;
