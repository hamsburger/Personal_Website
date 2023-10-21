import React from "react";
import { 
    Routes,
    Route
} from "react-router-dom";
import ProjectPanel from "./projectPanel";
import { Box } from "@material-ui/core";

export default function landingPage(){
    return (
        <React.Fragment>
            {/* Just a Normal Div*/}
            <Box>
                <ProjectPanel isHighlight={true}/>
                <ProjectPanel isHighlight={false}/>
            </Box>
        </React.Fragment>
        
    )
}