import React, { useState, useEffect } from "react";
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
        minHeight: "50vh",
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
    introText : {
        maxWidth: "800px",
        width: "80%",
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
        },
        "& > p" : {
            marginBottom: "20px",
            fontWeight: 400,
        },
        "& > a" : {
            marginTop: "30px"
        }
    }
}));
export default function Intro() {
    const classes = introStyles();
    const theme = useTheme();
    const [width, setWidth] = useState(window.innerWidth);


    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange, true);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);
    

    const isMobile = width <= 768;
    // console.log(width)
    return (
        <div id="intro" className={classes.intro}>
            {<TheAnimations/>}
            <div className={classes.introText}>
                <Typography style={
                    {
                        ...theme.overline_pretty,
                        fontSize: `${70 * (theme.breakpoints.up("sm") ? 1 : 0.2)}px`,
                        fontWeight: "100",
                        fontFamily: "Trebuchet,sans-serif",
                        marginLeft: "-5px",
                        cursor: "default"
                    }}
                >
                    Harris Zheng
            </Typography>
                <Divider style={{background: "white", marginBottom: "20px", height: "2px"}}/>
                <Typography variant="body1" style={{color: "rgba(255, 255, 255, 0.85)"}}>
                    UofT Bachelors in Computer Engineering 2023 <br/><br/>
                    2 years of Experience as Embedded Data Analyst at GeoTab
                </Typography>
                <Button variant="contained" href="#Projects">
                    Go to My Profile
                </Button>
            </div>
        </div>
    );
}
