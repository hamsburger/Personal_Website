import React from "react";
import { 
    Routes,
    Route
} from "react-router-dom";
import ProjectPanel from "./projectPanel";
import { Box } from "@material-ui/core";
import ContentBackground from "../../Basic/contentBackground";

export default function ProjectLandingPage(){
    return (
        <ContentBackground>
            <Box padding={2.5}>
                    <ProjectPanel isHighlight={true}/>
                    {/* <ProjectPanel isHighlight={false}/> */}    
            </Box>
        </ContentBackground>
    )
}