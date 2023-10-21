import React from "react";
import { Box, Typography } from "@material-ui/core";
import ProjectCard from '../../card';
import Projects from "../cardElements";


export default function ProjectPanel({ isHighlight = true }){
    let currentPathName = "/projects";
    return (
        <React.Fragment>
            <Box id="ProjectPanelArea" style={(isHighlight) ? {} : {marginTop: "100px"}}>
                <Typography variant="h2">
                   { (isHighlight) ? "Highlights 🌟" : "Other Projects 👨‍💻" }
                </Typography>         
                <Box id="ProjectPanel"  style={{
                    display: "flex",
                    justifyContent:"flex-start", 
                    flexWrap:"nowrap",
                    marginTop: "10px"
                }}>
                    {Projects.filter(elem => elem.isHighlight == isHighlight).map((elem) => {
                        const pathNavigate = `${currentPathName}/${elem["projectRoute"]}` 
                        return <ProjectCard {...elem} projectRoute={pathNavigate}></ProjectCard>
                    })}
                </Box>
            </Box>
        </React.Fragment>
    );
}