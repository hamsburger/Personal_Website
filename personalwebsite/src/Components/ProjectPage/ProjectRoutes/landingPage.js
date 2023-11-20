import React from "react";
import { 
    Routes,
    Route,
    useLocation
} from "react-router-dom";
import ProjectPanel from "./projectPanel";
import ProjectCard from '../../Basic/card';
import { Box, Divider, Typography } from "@material-ui/core";
import ContentBackground from "../../Basic/contentBackground";
import ContentWrapper from "../../Basic/contentWrapper";

export default function ProjectLandingPage(){
    const location = useLocation()

    return (
        <ContentBackground opacity={1} backgroundColor={(location.pathname == "/projects") && "rgba(30, 150, 225, 1)" ||
                                                                                              "rgba(195,205,240, 1)"}>
            <ContentWrapper styles={{paddingRight: "0px"}}opacity={(location.pathname == "/projects") && 0.6 || 0}>
                    {(location.pathname == "/projects") && (<>
                    <Typography variant="h1">Projects</Typography>
                    <Divider style={{height: "2px"}}/>
                    <br/>
                    </>)}
                    <ProjectPanel desiredPathName="/projects" isHighlight={true} CardElement={<ProjectCard/>}/>
                    {/* <ProjectPanel isHighlight={false}/> */}    
            </ContentWrapper>
        </ContentBackground>
    )
}