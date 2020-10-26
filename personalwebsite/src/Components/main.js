import React, {useState, useRef, useEffect,  useMemo, useLayoutEffect} from "react";
import ContentGrid from "./ContentPage/contentGrid";
import initData from "./ContentPage/bannerTitles";
import { makeStyles } from "@material-ui/core/styles";
import TempContent from "./ContentPage/bannerContent";
import Intro from "./IntroPage/intro";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";

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
  
  primaryToolBar : {
    background: "white",
  },
}));

const Main = () => {
  const [initSpeed, updateInitSpeed] = useState(true);
  const classes = mainStyles();


  return (
  <React.Fragment>
  <AppBar position="static" id="HomeBar">
    <ToolBar className={classes.primaryToolBar}>
      <Button style={{...{background: "transparent"}}} href="#BasicInfo">Home</Button>
      {/* <Button style={{background: "transparent"}}>Home</Button> */}
    </ToolBar>
  </AppBar>
  <div className="Main">
    <div id="intro">
      <Intro/>
    </div>
    <ContentGrid/>
  </div>
  </React.Fragment>
  );
};

export default Main;