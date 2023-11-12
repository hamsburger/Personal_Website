import React, {useState, useEffect, useReducer } from "react";
import ContentWrapper from "../../Basic/contentWrapper";
import ContentBackground from "../../Basic/contentBackground";
import Typography from "@material-ui/core/Typography";
import { CustomTableauRenderer } from "../ProjectFiles/Linkedin_Data_Analysis/ProjectElements/tableau_job_dashboard";
import { Divider, makeStyles, useTheme } from "@material-ui/core";
import DocViewer,  { DocViewerRenderers } from  "react-doc-viewer";
import ProjectCarousel from "../../Basic/projectCarousel";
const listOfElements = [];
// const TableauJobDashboard = require("./tableau_job_dashboard.html");
const linkedinDataAnalysis = makeStyles((theme) => ({
    
}));


export default function LinkedInJobAnalysis(){
    const theme = useTheme()

    // const CustomDocViewer = ({ uri }) => {
    //     return <DocViewer
    //         pluginRenderers={[CustomTableauRenderer]} 
    //         style={{
    //             background: theme.palette.secondary.opaque,
    //         }}  
    //         config={{
    //             header: {
    //                 disableHeader: true
    //             }
    //         }}
    //         documents={[
    //             { uri },
    //         ]}
    //     />
    // }

    return <>
        <ContentBackground>
            <ContentWrapper>
                <Typography variant="h1" style={{
                    ...theme.typography.overline_pretty,
                    fontSize: "1.5rem", 
                    letterSpacing: "5px"
                }}>2022 Job Market Analysis for Data Analysts</Typography>
                <Divider/>
                <Typography variant="h2">
                    The Problem
                </Typography>
                <Typography variant="body1">
                    In the Data Analyst Job Market, like job markets for many other positions, looking for a job can be hard if 
                    you don't know some general trends about the occupation you're interested in, such as what skills are required, 
                    which industries provide the highest salaries etc.. 

                    Most people take information they see on job postings and news as the truth, but their knowledge is limited
                    by what they see.  
                </Typography>
                <br/>
                <Typography variant="h2">
                    The Solution
                </Typography>
                <Typography variant="body1">
                    By analyzing a dataset instead of collecting job data case by case, we can unravel trends in the Data Analyst industry.
                    <br/><br/>
                    In the below dashboard, we can inspect those trends. Click on any button to load dashboards/presentations.
                </Typography>
            </ContentWrapper>
            <ProjectCarousel customPath="/projects/LinkedIn_Job_Analysis"/>
            {/* <CustomDocViewer uri="http://localhost:3000/ppt_presentations/ppt_job_presentation.html"/> */}
        </ContentBackground>
    </>
}