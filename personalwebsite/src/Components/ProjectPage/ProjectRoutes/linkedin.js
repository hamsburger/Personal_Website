import React, {useState, useEffect, useReducer } from "react";
import ContentWrapper from "../../Basic/contentWrapper";
import ContentBackground from "../../Basic/contentBackground";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { CustomTableauRenderer } from "../ProjectFiles/Linkedin_Data_Analysis/ProjectElements/tableau_job_dashboard";
import { Divider, makeStyles, useTheme } from "@material-ui/core";
// import DocViewer,  { DocViewerRenderers } from  "react-doc-viewer";
import ProjectCarousel from "../../Basic/projectCarousel";
import PrettyArticleHeading from "../../Basic/prettyArticleHeading";
import SocialsItem from "../../Basic/Socials/socialsItem";
import { GitHub } from "@material-ui/icons";
const listOfElements = [];
// const TableauJobDashboard = require("./tableau_job_dashboard.html");
const linkedinDataAnalysis = makeStyles((theme) => ({
    
}));


export default function LinkedInJobAnalysis({ tags, date }){
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
            <ContentWrapper opacity={0.8}>
                <PrettyArticleHeading>
                    2022 Job Market Analysis for Data Analysts
                </PrettyArticleHeading>
                <Divider/>
                <Box style={{display: "flex", justifyContent: "space-between", flexWrap: "wrap"}}>
                    <PrettyArticleHeading style={{fontSize: "1.2rem"}}>{date}</PrettyArticleHeading>  
                    <Box>
                        <PrettyArticleHeading style={{fontSize: "20px"}} display="inline">
                            Tags:
                        </PrettyArticleHeading>
                        <Typography variant="body1" display="inline" style={{marginLeft: "5px"}}>{tags.join(", ")}</Typography>
                    </Box>         
                </Box>
                <SocialsItem link={"https://github.com/hamsburger/LinkedIn_Job_Data_Analysis_2022"} Icon={<GitHub/>} title="GitHub Link"></SocialsItem>
                <Typography variant="h2" style={{...theme.headSpacing}}>
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
                <ProjectCarousel customPath="/projects/LinkedIn_Job_Analysis"/>
            </ContentWrapper>

            {/* <CustomDocViewer uri="http://localhost:3000/ppt_presentations/ppt_job_presentation.html"/> */}
        </ContentBackground>
    </>
}