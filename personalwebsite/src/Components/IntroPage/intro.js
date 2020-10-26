import React from "react";
import RippleCircle from "./RippleCircle.js";
import TextPath from "./TextPath";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const TheAnimations = () => {
    return (
        <React.Fragment>
          
          {/* NorthWest */}
          <RippleCircle x="10vw" y="40vh" strokeColor="rgba(0,0,0,0.6)" delay={1} />
          <RippleCircle x="25vw" y="30vh" strokeColor="rgba(0,0,0,0.6)" delay={2.1} />
          <RippleCircle x="17vw" y="20vh" strokeColor="rgba(0,0,0,0.6)" delay={3.3} />
    
          
          {/* SouthWest */}
          <RippleCircle x="20vw" y="80vh" strokeColor="rgba(0,0,0,0.6)" delay={1.5} />
          <RippleCircle x="35vw" y="90vh" strokeColor="rgba(0,0,0,0.6)" delay={3.5} />
          
          {/* NorthCenter */}
          <RippleCircle x="45vw" y="45vh" strokeColor="rgba(0,0,0,0.6)" delay={1.1}/>
          <RippleCircle x="50vw" y="25vh" strokeColor="rgba(0,0,0,0.6)" delay={1.1}/>
          
          {/* NorthEast */}
          <RippleCircle x="80vw" y="30vh" strokeColor="rgba(0,0,0,0.6)" delay={1.6}/>
          <RippleCircle x="60vw" y="15vh" strokeColor="rgba(0,0,0,0.6)" delay={2.7}/>
          <RippleCircle x="70vw" y="40vh" strokeColor="rgba(0,0,0,0.6)" delay={3.1}/>
          <RippleCircle x="90vw" y="20vh" strokeColor="rgba(0,0,0,0.6)" delay={2.2}/>
          <RippleCircle x="90vw" y="40vh" strokeColor="rgba(0,0,0,0.6)" delay={2.5}/>
          
          {/* SouthEast */}
          <RippleCircle x="80vw" y="80vh" strokeColor="rgba(0,0,0,0.6)" delay={1.6} />
          <RippleCircle x="90vw" y="70vh" strokeColor="rgba(0,0,0,0.6)" delay={2.5} />
          <RippleCircle x="85vw" y="75vh" strokeColor="rgba(0,0,0,0.6)" delay={2.1} />
          <RippleCircle x="60vw" y="90vh" strokeColor="rgba(0,0,0,0.6)" delay={1.3} />
          <RippleCircle x="60vw" y="80vh" strokeColor="rgba(0,0,0,0.6)" delay={2} />
          <RippleCircle x="35vw" y="90vh" strokeColor="rgba(0,0,0,0.6)" delay={4} />
        </React.Fragment>
      );    
}

const introStyles = makeStyles((theme) => ({
    transition : {
    
    },

    buttonColor : {
    },

    intro : {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        height: "100vh",
        width: "70vw",
        backgroundSize: "cover",
        "& > *" : {
            margin: "6px",
        }
    }
}));
export default function Intro() {
    const classes = introStyles();
    return (
        <div id="intro" className={classes.intro}>
        <TheAnimations/>
        <Typography variant="h2">
            Harris Zheng
        </Typography>
        <Divider/>
        <Button variant="contained" className={classes.buttonColor} href="#BasicInfo">
            Go to My Profile
        </Button>
        </div>
    );
}
