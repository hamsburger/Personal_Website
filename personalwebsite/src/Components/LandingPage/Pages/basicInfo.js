import React from "react";
import Typography from "@material-ui/core/Typography";
import Harris from "./images/me.jpg";
import Button from "@material-ui/core/Button";
import clsx from "clsx";
// import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import ContentWrapper from "../../Basic/contentWrapper";

const basicInfoStyles = makeStyles((theme) => ({
    basicInfoLayout: {
        position: "relative",
        lineHeight: "20px",
        height: "100%",
        background: theme.palette.secondary.opaque,
        padding: "20px"         

    },
    myImage : {
        maxHeight: "275px", 
        width: "100%",
        border: "3px solid black"
    },
    imageContainer : {
        position: "relative",
        padding: 0,
        [theme.breakpoints.up("xs")]:{
            float: "left",
            maxWidth: "45%",   
            paddingRight: "30px",   
            paddingBottom: "2px",
        },
        [theme.breakpoints.down("xs")]:{
            float: "none",
            padding: 0,
            paddingTop: "10px",
            maxWidth: "100%",
        },
    },
}));

export default ({ styles }) => {
    const parentClass = styles();
    const classes = basicInfoStyles();
    return (
        <ContentWrapper>
            <div className={classes.imageContainer}>
                <img src={Harris} className={classes.myImage}/>
            </div>
            <div className={parentClass.heading} style={{marginTop: "2px"}}>
                <Typography variant="h3" component="h5" style={{letterSpacing: "3px"}}>
                    About Myself
                </Typography>
            </div>
            <Typography variant="body1" component="p">
                I am an UofT 2023 Computer Engineering graduate.
            </Typography>
            <br/>
            <Typography variant="body1" component="p">
                
                I have <b>two years</b> of experience in the Automotive Data Analytics industry, as an<br/>Embedded Data Analyst at Geotab.
                <br/><br/>
                I am devoted to solving problems. And in order to do so, I put in relentless work to gather required 
                intel/insights. Check out the problems I've solved through work, at school, and through personal projects in the{" "}
                <a href="#Projects" onClick={
                    ()=>
                {}}> 
                    next banner
                </a>
                . 
            </Typography>
            <br/>   
            <Typography variant="body1" component="p">
                In my spare time, I like to post music arrangements on musescore and work on various music projects.
                My compositions have been performed around the world, in care homes, on YouTube, in different schools.  
            </Typography>
        </ContentWrapper>
    )
};