import React, { useState, useEffect } from "react";
import RippleCircle from "../../Animations/RippleCircle";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Books from "./images/books.png";
import Profile from "./images/profile.jpeg";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import clsx from "clsx";
import useMobile from "../../../Hooks/useMobile";
import SocialsItem from "../../Basic/Socials/socialsItem";
import { Send as SendIcon, LinkedIn, GitHub, YouTube, MusicNote, ExpandLess, ExpandMore, Mail,
    Storage as Storage, LibraryBooks as JupyterNotebook } from "@material-ui/icons";
const PERIOD = 2;

const TheAnimations = () => {
    return (
        <>
          
          {/* NorthWest */}
          <RippleCircle x="15vw" y="25vh" strokeColor="rgba(0,0,0,0.6)" delay={9}/>
          {/* <RippleCircle x="25vw" y="15vh" strokeColor="rgba(0,0,0,0.6)" delay={5} /> */}
          {/* <RippleCircle x="17vw" y="20vh" strokeColor="rgba(0,0,0,0.6)" delay={3.3} /> */}
          
          {/* NorthEast */}
          {/* <RippleCircle x="85vw" y="15vh" strokeColor="rgba(0,0,0,0.6)" delay={5}/> */}
          {/* <RippleCircle x="60vw" y="15vh" strokeColor="rgba(0,0,0,0.6)" delay={2.7}/> */}
          {/* <RippleCircle x="70vw" y="40vh" strokeColor="rgba(0,0,0,0.6)" delay={1.6 + PERIOD}/> */}
          {/* <RippleCircle x="90vw" y="20vh" strokeColor="rgba(0,0,0,0.6)" delay={6}/> */}
          {/* <RippleCircle x="90vw" y="40vh" strokeColor="rgba(0,0,0,0.6)" delay={2.5}/> */}
          
          
          
          {/* Center */}
          {/* <RippleCircle x="50vw" y="35vh" strokeColor="rgba(0,0,0,0.6)" delay={4}/> */}
          {/* <RippleCircle x="50vw" y="25vh" strokeColor="rgba(0,0,0,0.6)" delay={1.1}/> */}
          
          {/* SouthWest */}
          {/* <RippleCircle x="15vw" y="55vh" strokeColor="rgba(0,0,0,0.6)" delay={6} /> */}
          {/* <RippleCircle x="35vw" y="50vh" strokeColor="rgba(0,0,0,0.6)" delay={5} /> */}
          
          {/* SouthEast */}
          <RippleCircle x="85vw" y="55vh" strokeColor="rgba(0,0,0,0.6)" delay={8} />
          {/* <RippleCircle x="90vw" y="70vh" strokeColor="rgba(0,0,0,0.6)" delay={2.5} /> */}
          {/* <RippleCircle x="75vw" y="40vh" strokeColor="rgba(0,0,0,0.6)" delay={6} /> */}
          {/* <RippleCircle x="60vw" y="90vh" strokeColor="rgba(0,0,0,0.6)" delay={1.3} /> */}
          {/* <RippleCircle x="60vw" y="80vh" strokeColor="rgba(0,0,0,0.6)" delay={2} /> */}
          {/* <RippleCircle x="35vw" y="90vh" strokeColor="rgba(0,0,0,0.6)" delay={4} /> */}
          </>
      );    
  }


const introStyles = makeStyles((theme) => ({
    intro : {
        position: 'relative',
        alignItems: "center",
        overflowX: "hidden",
        minHeight: "40vh",
        height: "100%",
        width: "100%",
        // display: "flex",
        // justifyContent: "center",
        backgroundImage: `url(${Books})`,
        backgroundColor: "rgb(50, 120, 70)",
        backgroundBlendMode: "screen",
        backgroundSize: "auto 100%",
        paddingBottom: "20px",
    },
    introText: {
        ...theme.overline_pretty,
        // fontSize: `3rem`,
        fontWeight: "100",
        marginBottom: "40px",  
        fontFamily: "Trebuchet,sans-serif",
        marginLeft: "-5px",
        cursor: "default"
    },
    imageContainer : {
        position: "relative",
        float: "left",
        [theme.breakpoints.up("md")]:{
            float: "left",
            marginRight: "25px"
        },
        [theme.breakpoints.down("sm")]:{
            padding: 0,
            marginBottom: "5px"
        },
    },
    introTextBox : {
        maxWidth: "900px",
        width: "80%",
        marginLeft: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        // left: 0,
        // top: 0,
        background: "rgba(0, 0, 0, 0.9)",
        color: 'white',
        borderRadius: "0 0 10px 0",
        paddingRight: "20px",
        paddingLeft: "20px",
        paddingBottom: "20px",
        paddingTop: "20px",
        marginTop: 0,
        "& > *" : {
            flex: "0 0 auto",
            marginBottom: "20px",
            fontWeight: 400,
        },
        "& > p" : {
            // marginBottom: "20px",
            // fontWeight: 400,
        },
        "& > a" : {
            marginTop: "30px"
        }
    },
    headerBox: {
        display: "inline-flex", 
        gap: "10px",
        "& > *" : {
            cursor: "pointer"
        }
    },
}));
export default function Intro() {
    const classes = introStyles();
    const theme = useTheme();
    const isMobile = useMobile()

    // console.log(width)
    return (
        <div id="intro" className={classes.intro}>
            {(!isMobile) && <TheAnimations/>}
            <div className={classes.introTextBox}>
                <div className={classes.headerBox}>
                    <Typography variant="h1">
                        Harris (Hai Ran) Zheng
                    </Typography>
                    <span onClick={() => window.open("https://www.linkedin.com/in/harriszheng/", "_blank")}>
                        <LinkedIn style={{ color: "white", ...theme.typography.h1, fontSize: "2.25rem"}}/>
                    </span>
                    <span onClick={() => window.open("https://github.com/hamsburger", "_blank")}>
                        <GitHub style={{ color: "white", ...theme.typography.h1, fontSize: "2.25rem"}}/>
                    </span>
                </div>
                <div className={classes.imageContainer}>
                    <img src={Profile} style={{maxHeight: "200px", float: "left", paddingRight: "80px"}}/>
                    {/* <Typography variant="body1">
                    <b>Key Skills:</b> Python, End-To-End Pipelines
                    </Typography> */}
                </div>
                <Divider style={{background: "white", marginBottom: "20px", height: "2px"}}/>
                <Typography variant="h2">
                    Education
                </Typography>
                <Typography variant="body1" style={{color: "rgba(255, 255, 255, 0.85)"}}>
                    University of Michigan Data Science (2023 - Present (Expected 2025)) <br/>
                    University of Toronto Bachelors in Computer Engineering 2018-2023
                </Typography>
                <Typography variant="h2">
                    Experience
                </Typography>
                <Typography variant="body1" style={{color: "rgba(255, 255, 255, 0.85)"}}>
                    2 years of Experience as Embedded Data Analyst at GeoTab
                </Typography>
                <Button variant="contained" href="#Projects">
                    Go to My Profile
                </Button>
            </div>
        </div>
    );
}
