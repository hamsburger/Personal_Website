import React from "react";
import { 
    Card, 
    CardContent, 
    CardActions,
    CardMedia,
    CardHeader,
    Typography,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { 
    BrowserRouter,
    Routes,
    Route,
    useNavigate
} from "react-router-dom";
import { Box } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import RoundButton from "./round_button";

const cardStyles = makeStyles((theme) => ({
    card : {
        // display: "flex",
        [theme.breakpoints.up("sm")] : {
            // minHeight: "400px",
            height: "100%"
        }, 
        [theme.breakpoints.down("xs")] : {
            maxWidth: "100%",
            width: "100%"
        },   

        // maxWidth: "100%",
        margin: "20px",
        marginLeft: "0px",
        borderRadius: "5px",
        cursor: "pointer",
        boxShadow: "4px 0 12px -12px"
        
        // maxWidth: "50%"
    },
    gradientCaptionBox: {
        // position: "absolute",
        boxSizing: "border-box",
        borderRadius: "0 0 10px 10px",
        background: "white",
        // background: "linear-gradient(to right top, #000000, #121011, #1d1a1d, #272429, #302f36, #424249, #55555d, #686a72, #8c8d93, #b1b1b6, #d8d7da 95%, #ffffff)",
        opacity: 0.9,
        // background: "linear-gradient(360deg, rgba(2,0,36,1) 0%, rgba(110,105,107,1) 40%, rgba(255,255,255,1) 100%)",
        padding: "10px",
        bottom: "4px",
        // color: "white",
        // background: "rgba(125, 125, 125, 0.9)",
        position: "relative",
        // height: "100px",
        width: "100%",
        maxWidth: "calc(310px * 1.9833)", // Fit with image
        transition: "all 0.2s ease-in",
        "&:hover" : {
            opacity: 1
        }
        // paddingBottom: 10,
    },
    imageBox : {
        position: "relative"
    }, 

    shortDescription: {
        ...theme.typography.body2,
        fontWeight: 900, 
        [theme.breakpoints.up("sm")] : {
            fontSize: "1rem"
        },
        [theme.breakpoints.down("xs")] : {
            fontSize: "0.8rem"
        },
        
    },

    image : {
        [theme.breakpoints.up("sm")] : {
            maxHeight: "310px",
            height: "100%"
        }, 
        [theme.breakpoints.down("xs")] : {
            maxWidth: "100%",
            width: "100%"
        },   

    }
}));

export default ({ imageFilePath, shortDescription, projectRoute, tags }) => {
    const classes = cardStyles();
    const navigate = useNavigate();
    const theme = useTheme();
    
    return (
        <Box className={classes.card} onClick={() => {
                // console.log(projectRoute)
                navigate(projectRoute)
            }}>
                <Box className={classes.imageBox}>
                    <img src={imageFilePath} className={classes.image}/>
                    <Box className={classes.gradientCaptionBox}>
                        <Typography className={classes.shortDescription}>
                            {shortDescription} <br/>
                        </Typography>
                        <div style={{ paddingTop: "15px"}}>
                            {tags.map((tag) => <RoundButton tag={tag}/>)}
                        </div>
                    </Box>
                </Box>
               
        </Box>
    );   
}