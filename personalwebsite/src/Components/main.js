import React, {useState, useRef, useEffect,  useMemo, useLayoutEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Intro from "./LandingPage/IntroPage/intro";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import ContentGrid from "./LandingPage/ContentPage/contentGrid";
import Project from "./ProjectPage/main";
import Music from "./MusicPage/music";
import Blog from "./BlogPage/blog";
import ScrollToTop from "./Basic/scrollToTop";
import { Paper } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Link,
  Routes,
  Route
} from "react-router-dom"
import clsx from "clsx";
import ProjectProvider from "../Contexts/external_data_context";
import LandingPage from "./LandingPage/main";
import { URLObjDict } from "../DataModels/models";
import LinkGenerator from "./Basic/LinkGenerator";
import RouteGenerator from "./Basic/RouteGenerator";
import mainRoute from "./thisRoute";
// import LazyLoad from "react-lazyload";


// const Spinner = () => (
//   <div className="post loading">
//     <svg
//       width="80"
//       height="80"
//       viewBox="0 0 100 100"
//       preserveAspectRatio="xMidYMid"
//     >
//       <circle
//         cx="50"
//         cy="50"
//         fill="none"
//         stroke="#49d1e0"
//         strokeWidth="10"
//         r="35"
//         strokeDasharray="164.93361431346415 56.97787143782138"
//         transform="rotate(275.845 50 50)"
//       >
//         <animateTransform
//           attributeName="transform"
//           type="rotate"
//           calcMode="linear"
//           values="0 50 50;360 50 50"
//           keyTimes="0;1"
//           dur="1s"
//           begin="0s"
//           repeatCount="indefinite"
//         />
//       </circle>
//     </svg>
//   </div>
// );

const mainStyles = makeStyles((theme)=>({
  widthAdjust: {
    width: (props) => (props.isToolBarHidden) ? "30px" : "100%"
  },
  menuButtonBar: {
    position: "absolute",
    left: 0,
    marginLeft: "10px",
    [theme.breakpoints.down("sm")]:{
      top: "0%"
    },
    [theme.breakpoints.up("sm")]:{
      top: "15%"
    },
    transform: "scale(1.3)"
  },
  menuButton: {
    position: "absolute",
    left: 0,
    marginLeft: "10px",
    top: 0,
    transform: "scale(1.3)",
    "&:hover" : {
      opacity: 1
    },
    opacity: 0.03
  },
  button : {
    background: "transparent",
    textUnderlineOffset: "none",
    ...theme.typography.overline_pretty,
    fontSize: "20",
    textDecoration: "underline",
    fontWeight: 500,
  },
  primaryToolBar : {
    display: (props) => (props.isToolBarHidden) ? "none" : "flex",
    width: "100%",
    // width: (props) => (props.isToolBarHidden) ? "auto" : "100%",
    [theme.breakpoints.down("sm")] : {
      flexDirection: "column"
  },
    [theme.breakpoints.up("sm")] : {
      flexDirection: "row"
    },
    background: "white",
    boxShadow: "0 0 10px -3px rgba(0,0,0,0.8)",
    justifyContent: "center",
    zIndex: 2,
    flexWrap: "wrap",
    "& > a": {
      marginRight: "10px",
      marginLeft: "10px"
    }
  },
  main : {
    background: theme.palette.secondary.main
  }
}));

/** TO-DO! DOES NOT FIT WITHIN OUR FOLDER CONVENTIONS */

const Main = () => {
  const [initSpeed, updateInitSpeed] = useState(true);
  const [isToolBarHidden, updateToolBarHidden] = useState(false); 
  const classes = mainStyles({isToolBarHidden : isToolBarHidden});
  const routeDictionary = mainRoute;
  console.log("hi")

  useEffect(() => {
    window.addEventListener('resize', (e) => {
      e.stopImmediatePropagation();
      e.stopPropagation();
    }, true);
  }, []);

  return (
    <React.Fragment>
    <Router>
      <ScrollToTop/>
      <AppBar position="sticky">
        <ToolBar className={classes.primaryToolBar} disableGutters={true}>
            <IconButton className={classes.menuButtonBar} onClick={(e) => {updateToolBarHidden(!isToolBarHidden)}} edge="start" size="medium" 
                        color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Link to="/">
              <Button className={classes.button} href="#BasicInfo">
                Home
              </Button>
            </Link>
            <LinkGenerator customPath="/"/>
            
            {/* <Link to="/projects">
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
            </Link>  */}
          {/* <Button style={{background: "transparent"}}>Home</Button> */}
        </ToolBar>
      </AppBar>
      <ProjectProvider urlRouteDict={URLObjDict}>
        <div className={classes.main}>
          {
          (isToolBarHidden) && <IconButton className={classes.menuButton} onClick={(e) => {
              updateToolBarHidden(!isToolBarHidden)
            }} size="medium" 
              color="inherit"
              style={{zIndex: 3, position: "fixed"}}>
            <MenuIcon />
          </IconButton>  
          }
            <RouteGenerator customPath="/" routeDict={mainRoute}/>
            {/* <Route path="/projects/*" element={<Project/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/music" element={<Music/>}/>
            <Route path="*" element={<LandingPage/>}/> */}
        </div>
      </ProjectProvider>

    </Router>
    </React.Fragment>
  );
};

export default Main;