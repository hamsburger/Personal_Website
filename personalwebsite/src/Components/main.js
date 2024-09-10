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
import { 
  Paper, Box, Typography, 
  List, ListItem, ListSubheader, ListItemIcon, ListItemText, 
  SvgIcon, Collapse } from "@material-ui/core";
import { Send as SendIcon, LinkedIn, GitHub, YouTube, MusicNote, ExpandLess, ExpandMore, Close, KeyboardHide, ArrowLeft } from "@material-ui/icons";
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
import SocialsList from "./Basic/Socials/socialsList";
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
  // widthAdjust: {
  //   width: (props) => (props.showToolBar) ? "30px" : "100%"
  // },
  menuButtonBar: {
    position: "absolute",
    left: 0,
    marginLeft: "10px",
    [theme.breakpoints.down("sm")]:{
      top: "0%"
    },
    [theme.breakpoints.up("md")]:{
      top: "15%"
    },
    color: "white",
    transform: "scale(1.3)"
  },
  menuButton: {
    position: "fixed",
    left: 0,
    marginLeft: "10px",
    color: "black",
    top: 0,
    zIndex: 1,
    transform: "scale(1.6)",
    "&:hover" : {
      opacity: 1
    },
    opacity: 0.05,
    // border: "3px solid black",
    // background: "white"
  },
  button : {
    background: "transparent",
    textUnderlineOffset: "none",
    ...theme.typography.overline_pretty,
    fontSize: "1rem",
    color: "white",
    textDecoration: "underline",
    fontWeight: 500,
    height: "40px",
    "&:hover" : {
      color: "black",
      background: "rgba(255, 255, 255, 0.8)",
    }
  },
  primaryToolBar : {
    display: "flex",
    width: "100%",
    // width: (props) => (props.showToolBar) ? "auto" : "100%",
    [theme.breakpoints.down("sm")] : {
      flexDirection: "column",
      "& > *" : {
        marginBottom: "10px"
      },
      
    },
    [theme.breakpoints.up("md")] : {
      flexDirection: "row",
    },
    background: "rgba(0, 0, 0, 0.9)",
    boxShadow: "0 0 10px -3px rgba(0,0,0,0.8)",
    justifyContent: "center",
    zIndex: 2,
    flexWrap: "wrap",
    color: "white",
    // "& > *" : {
    //   flexGrow: 1
    // },
    "& > a": {
      marginRight: "20px",
      marginLeft: "20px",
      
    },

  },
  socialsButton: {
    position: "absolute", 
    right: "10px",
    transition: "all 0.1s",
    borderRadius: "5px",
    padding: "5px 10px",
    [theme.breakpoints.down("sm")] : {
      bottom: "0px",
      right: "0px"
    },
    "&:hover" : {
      background:"rgb(200, 200, 200)",
      color: "black",
    }
  },
  // menuBar : {
  //   flexGrow: 20, 
  //   display: "flex", 
  //   justifyContent: "center",
  //   alignItems: "center",
  //   [theme.breakpoints.down("sm")] : {
  //       flexDirection: "column"
  //   },
  //   [theme.breakpoints.up("sm")] : {
  //       flexDirection: "row"
  //   },
  //   "& > a": {
  //     marginRight: "20px",
  //     marginLeft: "20px",
      
  //   },
  // },
  main : {
    // background: theme.palette.secondary.main
  }
}));

/** TO-DO! DOES NOT FIT WITHIN OUR FOLDER CONVENTIONS */

const Main = () => {
  const [initSpeed, updateInitSpeed] = useState(true);
  const [showToolBar, updateToolBar] = useState(false); 
  const [isSocialsOpen, updateSocials] = useState(false);
  const [openMusic, updateMusicOpen] = useState(false);
  const classes = mainStyles({showToolBar : showToolBar});
  const routeDictionary = mainRoute;

  useEffect(() => {
    /** Not a good idea to stop propogation for event listeners on window.
     * Can potentially affect the functionality of many third party libraries.
     */
    window.addEventListener('resize', (e) => {
      e.stopImmediatePropagation();
      e.stopPropagation();
    }, true);
  }, []);

  return (
    <React.Fragment>
    <Router>
      <ScrollToTop/>
      <AppBar position="relative">
        <ToolBar className={classes.primaryToolBar} disableGutters={true}>
            <IconButton className={classes.menuButtonBar} onClick={(e) => {
                if (showToolBar) updateSocials(false) // close event 
                updateToolBar(!showToolBar)
              }} edge="start" size="medium" 
                        color="inherit" aria-label="menu">
              {(showToolBar) && <Close/> || <MenuIcon/>}
            </IconButton>


            {(showToolBar) && <><Link to="/">
                <Button className={classes.button}>
                  Home
                </Button>
              </Link>
              <LinkGenerator customPath="/"/>
              <Box className={classes.socialsButton} onClick={() => updateSocials(!isSocialsOpen)}>
                <Typography variant="h6" style={{fontWeight: 600, cursor: "pointer"}}>Socials</Typography>
              </Box></>
            }
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
          
         {(isSocialsOpen) && <SocialsList/>}
         <RouteGenerator customPath="/" routeDict={mainRoute}/>
        </div>
      </ProjectProvider>
      <footer style={{textAlign: "center", padding: "20px", marginTop: "20px", zIndex: 1, position: "relative"}}>
                <Typography variant="h3">@2023 Harris Zheng</Typography>
                <br/>
                <br/>
                <Typography variant="body1">Art Attributions:</Typography>
                <br/>
                <a href="https://www.vecteezy.com/vector-art/25015289-a-magic-shop-floating-above-the-clouds" target="blank_">
                  A Magic Shop Floating Above The Clouds Vectors by Vecteezy</a>
                <br/>
                <a href="https://pixabay.com/vectors/books-coffee-cup-digital-art-pastel-7309019/" target="blank_">
                  Books Coffee Cup Digital Art Pastel by Pixabay</a>
                <br/>
                <Typography variant="body1">Icons from <a href="https://icons8.com/" target="blank_">Icons8</a> and{" "} 
                <a href="https://v4.mui.com/components/material-icons/#material-icons" target="blank_">
                Material Icons</a></Typography>
                <br/><br/>
                <b>Built with React</b>
      </footer>

    </Router>
    </React.Fragment>
  );
};

export default Main;