import React from "react";
import { Box, Typography } from "@material-ui/core";
import ProjectCard from '../../Basic/card';
import { projectCardElements } from "../../../DataModels/models"; 
import { dictAccessor } from "../../../Helpers/dictAccesor";

export default function ProjectPanel({ isHighlight = true }){
    let desiredPathName = "/projects"
    let UIComponents = dictAccessor(desiredPathName, projectCardElements)
    return (
        <React.Fragment>
            <Box id="ProjectPanelArea" style={(isHighlight) ? {} : {marginTop: "100px"}}>
                <Typography variant="h3" style={{letterSpacing: "5px"}}>
                   { (isHighlight) ? "Highlights 🌟" : "Other Projects 👨‍💻" }
                </Typography>         
                <Box id="ProjectPanel"  style={{
                    display: "flex",
                    justifyContent:"flex-start", 
                    flexWrap:"wrap",
                    marginTop: "10px"
                }}>
                    {Object.entries(UIComponents).map((elem) => {
                        const pathNavigate = `${desiredPathName}/${elem[0]}` 
                        return <ProjectCard {...elem[1]} projectRoute={pathNavigate}></ProjectCard>
                    })}
                </Box>
            </Box>
        </React.Fragment>
    );
}