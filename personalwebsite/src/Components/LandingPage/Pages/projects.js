import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import FrontEndDev from "./ProjectSections/frontEndDev";
import DatabaseSkills from "./ProjectSections/databaseSkills";
import LandingPage from "../../ProjectPage/main"

const useStyles = makeStyles((theme) => ({
    headers: {
        fontWeight: 600
    },
    myImage : {
        width: "100%",
    },
    imageContainer : {
        position: "relative",

            // height: "50%",
        padding: 0,
        paddingTop: "20px",
        maxWidth: "95%",
    }
    
}));

export default ({ styles }) => {
    return (<LandingPage/>);
};