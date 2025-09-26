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
import linkStyles from "../../../Helpers/createLinkStylesArticle";
import { GitHubSocials, SQLSocials } from "../../Basic/Socials/socialsList";

const listOfElements = [];
// const TableauJobDashboard = require("./tableau_job_dashboard.html");


export default function LinkedInJobAnalysis({ tags, date }){
    const theme = useTheme()
    const classes = linkStyles();

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
                <Box style={{display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "5px 0px"}}>
                    <PrettyArticleHeading style={{fontSize: "1.2rem"}}>{date}</PrettyArticleHeading>  
                    <Box>
                        <PrettyArticleHeading style={{fontSize: "20px"}} display="inline">
                            Tags:
                        </PrettyArticleHeading>
                        <Typography variant="body1" display="inline" style={{marginLeft: "5px"}}>{tags.join(", ")}</Typography>
                    </Box>         
                </Box>
                <div className={classes.surveyLinks}>
                    <SocialsItem link={"https://github.com/hamsburger/LinkedIn_Job_Data_Analysis_2022/tree/main"} 
                                Icon={<GitHub/>} 
                                title={"GitHub Link"}/>
                    <SQLSocials link={"https://github.com/hamsburger/LinkedIn_Job_Data_Analysis_2022/tree/main/bigquery_sql_files"} 
                                title={"SQL queries"}></SQLSocials>
                </div>
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
                    <br></br>
                    We can also perform more sophisticated topic modeling analysis to find out job types based on their job descriptions,
                    using state-of-the-art BERTopic model. Check out my more advanced analysis here:  
                    <div>
                        <GitHubSocials link={"https://github.com/hamsburger/LinkedIn_Job_Data_Analysis_2022/blob/main/linkedin-job-data-job-type-analysis.ipynb"}
                                       title={"Topic Modeling Job Descriptions using BERTopic"}/>
                    </div>
                </Typography>
                <ProjectCarousel customPath="/blog/LinkedIn_Job_Analysis"/>
            </ContentWrapper>

            {/* <CustomDocViewer uri="http://localhost:3000/ppt_presentations/ppt_job_presentation.html"/> */}
        </ContentBackground>
    </>
}