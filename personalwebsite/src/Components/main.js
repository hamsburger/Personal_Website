import React, {useState, useRef, useEffect,  useMemo, useLayoutEffect} from "react";
import ContentGrid from "./LandingPage/ContentPage/contentGrid";
import initData from "./LandingPage/ContentPage/bannerTitles";
import { makeStyles } from "@material-ui/core/styles";
import TempContent from "./LandingPage/ContentPage/bannerContent";
import Intro from "./LandingPage/IntroPage/intro";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import Project from "./ProjectPage/main";
import Music from "./MusicPage/music";
import Blog from "./BlogPage/blog";


import {
  BrowserRouter as Router,
  Link,
  Routes,
  Route
} from "react-router-dom"

// import LazyLoad from "react-lazyload";


const Spinner = () => (
  <div className="post loading">
    <svg
      width="80"
      height="80"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <circle
        cx="50"
        cy="50"
        fill="none"
        stroke="#49d1e0"
        strokeWidth="10"
        r="35"
        strokeDasharray="164.93361431346415 56.97787143782138"
        transform="rotate(275.845 50 50)"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          calcMode="linear"
          values="0 50 50;360 50 50"
          keyTimes="0;1"
          dur="1s"
          begin="0s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  </div>
);

const Scroll = (e) => {
  const elem = e.target;
  if (!elem) return;
  alert(elem);
};

const mainStyles = makeStyles((theme)=>({
  button : {
    background: "transparent",
    textUnderlineOffset: "none"
  },
  primaryToolBar : {
    background: "white",
  },
}));

const LandingPage = () => {
  return (<div className="Main">
  <div id="intro">
      <Intro/>
    </div>
    <ContentGrid/>
  </div>)

}
const Main = () => {
  const [initSpeed, updateInitSpeed] = useState(true);
  const classes = mainStyles();

  return (
    <React.Fragment>
    <Router>
      <AppBar position="static" id="HomeBar">
        <ToolBar className={classes.primaryToolBar}>
            <Link to="/">
              <Button className={classes.button} href="#BasicInfo">
                Home
              </Button>
            </Link>
            <Link to="/projects">
              <Button className={classes.button}>
                Projects
              </Button>
            </Link>  
            <Link to="/blog">
              <Button className={classes.button}>
                Blog
              </Button> 
            </Link>
          
            <Link to="/music">
              <Button className={classes.button}>
                Music
              </Button>
            </Link> 
          {/* <Button style={{background: "transparent"}}>Home</Button> */}
        </ToolBar>
      </AppBar>

      <Routes>
        <Route path="/projects/*" element={<Project/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/music" element={<Music/>}/>
        <Route path="/" element={<LandingPage/>}/>
      </Routes>

    </Router>
    </React.Fragment>
  );
};

export default Main;