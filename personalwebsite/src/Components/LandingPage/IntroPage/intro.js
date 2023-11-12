import React from "react";
import RippleCircle from "../../Animations/RippleCircle";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Books from "./images/books.png";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import clsx from "clsx";
const PERIOD = 2;

const TheAnimations = () => {
    return (
        <React.Fragment>
          
          {/* NorthWest */}
          <RippleCircle x="15vw" y="25vh" strokeColor="rgba(0,0,0,0.6)" delay={6}/>
          <RippleCircle x="25vw" y="15vh" strokeColor="rgba(0,0,0,0.6)" delay={5} />
          {/* <RippleCircle x="17vw" y="20vh" strokeColor="rgba(0,0,0,0.6)" delay={3.3} /> */}
          
          {/* NorthEast */}
          <RippleCircle x="85vw" y="15vh" strokeColor="rgba(0,0,0,0.6)" delay={5}/>
          {/* <RippleCircle x="60vw" y="15vh" strokeColor="rgba(0,0,0,0.6)" delay={2.7}/> */}
          {/* <RippleCircle x="70vw" y="40vh" strokeColor="rgba(0,0,0,0.6)" delay={1.6 + PERIOD}/> */}
          <RippleCircle x="90vw" y="20vh" strokeColor="rgba(0,0,0,0.6)" delay={6}/>
          {/* <RippleCircle x="90vw" y="40vh" strokeColor="rgba(0,0,0,0.6)" delay={2.5}/> */}
          
          
          
          {/* Center */}
          <RippleCircle x="50vw" y="35vh" strokeColor="rgba(0,0,0,0.6)" delay={4}/>
          {/* <RippleCircle x="50vw" y="25vh" strokeColor="rgba(0,0,0,0.6)" delay={1.1}/> */}
          
          {/* SouthWest */}
          <RippleCircle x="15vw" y="55vh" strokeColor="rgba(0,0,0,0.6)" delay={6} />
          <RippleCircle x="35vw" y="50vh" strokeColor="rgba(0,0,0,0.6)" delay={5} />
          
          {/* SouthEast */}
          <RippleCircle x="85vw" y="55vh" strokeColor="rgba(0,0,0,0.6)" delay={5} />
          {/* <RippleCircle x="90vw" y="70vh" strokeColor="rgba(0,0,0,0.6)" delay={2.5} /> */}
          <RippleCircle x="75vw" y="40vh" strokeColor="rgba(0,0,0,0.6)" delay={6} />
          {/* <RippleCircle x="60vw" y="90vh" strokeColor="rgba(0,0,0,0.6)" delay={1.3} /> */}
          {/* <RippleCircle x="60vw" y="80vh" strokeColor="rgba(0,0,0,0.6)" delay={2} /> */}
          {/* <RippleCircle x="35vw" y="90vh" strokeColor="rgba(0,0,0,0.6)" delay={4} /> */}
          </React.Fragment>
      );    
  }


const introStyles = makeStyles((theme) => ({
    intro : {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflowX: "none",
        overflowY: "overflow",
        height: "70vh",
        width: "130vw",
        backgroundImage: `url(${Books})`,
        backgroundSize: "auto 100%"
    },
    introText : {
        width: "50vw",
        background: "rgba(219, 219, 223, 0.7)",
        borderRadius: "10px",
        padding: "10px",
        paddingBottom: "20px",
        paddingTop: "20px",
        textAlign: "center",
        "& > p" : {
            textAlign: "center",
            marginTop: "3px"
        },

        "& > a" : {
            textAlign: "center",
            marginTop: "30px"
        }
    }
}));
export default function Intro() {
    const classes = introStyles();
    const theme = useTheme();
    return (
        <div id="intro" className={classes.intro}>
            <TheAnimations/> 
            <div className={classes.introText}>
                <Typography style={
                    {
                        ...theme.overline_pretty,
                        fontSize: "60px",
                        fontWeight: "100",
                        textAlign: "center"
                    }}
                >
                    Harris Zheng
                </Typography>
                <Typography variant="body1">
                    Question asker. Problem solver.
                </Typography>
                <Button variant="contained" href="#BasicInfo">
                    Go to My Profile
                </Button>
            </div>
        </div>
    );
}
