import React from "react";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
// import Harris from "./images/me.jpg";
import Button from "@material-ui/core/Button";
import clsx from "clsx";
import me from "/public/me.jpg";
import { Link } from "react-router-dom";
// import Divider from "@material-ui/core/Divider";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ContentWrapper from "../../Basic/contentWrapper";
import SocialsItem from "../../Basic/Socials/socialsItem";
import { LinkedIn } from "@material-ui/icons";
import { ContactSocials, MusicSocials, WorkSocials } from "../../Basic/Socials/socialsList";

const basicInfoStyles = makeStyles((theme) => ({
    flexBox : {
        display: "flex",
        [theme.breakpoints.up("sm")]:{
            flexDirection: "row"
        },
        [theme.breakpoints.down("xs")]:{
            flexDirection: "column",
            minHeight: "0px",
            padding: 0,
            paddingTop: "10px",
        },
    },
    myImage : { 
        maxHeight: "325px",
        maxWidth: "100%",
        border: "3px solid black"
    },
    imageContainer : {
        position: "relative",
        margin: "20px",
        [theme.breakpoints.up("md")]:{
            float: "left",
            marginRight: "25px"
        },
        [theme.breakpoints.down("sm")]:{
            padding: 0,
            marginBottom: "5px"
        },
    },
}));

export default ({ styles }) => {
    const classes = basicInfoStyles();
    const theme = useTheme()
    return (
    <ContentWrapper padding={"5px"}>
            <div className={classes.imageContainer}>
                <img src={me} className={classes.myImage}/>
            </div>
            <ContentWrapper opacity={0}>
                    <Typography variant="h1" style={{letterSpacing: "3px", fontSize: "2.5rem"}}>
                        About Myself (Brief Overview)
                    </Typography>
                    <Typography variant="body1" component="p">
                        Welcome to my page! If you're here, you want to learn more about me...<br/>
                    </Typography>
                    <Typography variant="body1" component="p">
                        So let me show you how I roll:
                    </Typography>
                    <br/>       
                    <Typography variant="h3">Data Analytics</Typography>
                    <Typography variant="body1">Everyday, I'm looking to use my fluent programming and dashboarding skills for the benefit of myself and others, 
                    whether it's making a fun {" "}<a href="/projects/ECE2T2_Survey" target="_blank">Jupyter Notebook data report</a> about Computer Engineering students,
                    finding insights about the{" "}<a href="/projects/LinkedIn_Job_Analysis" target="_blank">
                    Data Analyst Job Industry</a>, or building this website to stand out a little more... I'm actively looking for new things to do and accomplish.
                    Currently I'm learning to data scrape Instagram and exploring Dashboarding Tool Streamlit in hopes to learn more about my favourite content creators. </Typography>
                    <Typography variant="h3">Music</Typography>
                    <Typography variant="body1">I go mad on the piano/keyboard. My typing speed is ~100BPM, which certainly helps on the piano but I take more pride
                    in being able to make emotional connections in music. My popular sheet music average thousands of views on MuseScore and my original music/arrangements
                    have been found by people across the Internet and performed in various situations, such as {" "}
                    <a href="https://www.youtube.com/watch?v=JEWpXjcgW3U&list=PL9vgQRzE-fWereYkznSlSvcd85WETKlz3&index=2" target="_blank">on Youtube</a>/
                    <a href="https://www.youtube.com/watch?v=G4YqZtDCHT4" target="_blank">at care homes</a></Typography>
                    <br/>
                    Use the navigation bar fixed at the top of the page to find out more about me if you're interested! Such as my projects, blogs, socials etc.. Enjoy your stay!
            </ContentWrapper>
    </ContentWrapper>
    )
};