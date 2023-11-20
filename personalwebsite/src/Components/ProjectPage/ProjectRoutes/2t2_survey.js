import React from "react";
import PrettyArticleHeading from "../../Basic/prettyArticleHeading";
import ContentWrapper from "../../Basic/contentWrapper";
import ContentBackground from "../../Basic/contentBackground";
import { Box, Divider, Typography, makeStyles, useTheme } from "@material-ui/core";
import ImageCaption from "../../Basic/caption";
import Table from "../../Basic/table";
import SocialsItem from "../../Basic/Socials/socialsItem";
import { GitHub, Language } from "@material-ui/icons";
import titleImage from "/public/ECE2T2_Survey/class_profile_1_title_page.png";
import goOutPerWeek from "/public/ECE2T2_Survey/class_profile_bar_chart.png";
import tarekClusters from "/public/ECE2T2_Survey/tarek_clusters.png";
import textClustering from "/public/ECE2T2_Survey/text_clustering_cleaning.gif";
import favTeachers from "/public/ECE2T2_Survey/favourite_teachers.png";
import gradePerSemester from "/public/ECE2T2_Survey/progression_of_grades.png";
import firstYearLive from "/public/ECE2T2_Survey/first_year_live.png";
import gradePerceivedHardness from "/public/ECE2T2_Survey/grades_perceived_hardness.png";
import timeTakenToFindJob from "/public/ECE2T2_Survey/time_taken_to_find_job.png";

const surveyStyles = makeStyles((theme) => ({
    surveyLinks: {
        display: "flex",
        [theme.breakpoints.up("sm")] : {
            flexDirection: "row",
            "& *" : {
                paddingTop: "0px"
            }
        },
        [theme.breakpoints.down("xs")] : {
            flexDirection: "column",
            paddingTop: "8px",
        },

    }
}))
export default function Survey2T2({ tags, date }){
    const theme = useTheme()
    const classes = surveyStyles()
    return (
        <ContentBackground>
            <ContentWrapper opacity={0.9}>
                {/* Title and Icon Header */}
                <Box style={{display: "flex", justifyContent: "space-between", flexWrap: "wrap"}}>
                    <PrettyArticleHeading>
                        ECE2T2 Survey
                    </PrettyArticleHeading>
                    <Box className={classes.surveyLinks}>
                        <SocialsItem Icon={<GitHub/>} title={"GitHub Repo"} link={"https://github.com/hamsburger/ECE2T2_Survey_Results"}/>
                        <SocialsItem Icon={<Language/>} title={"HTML Report"} link={"https://hamsburger.github.io/ECE2T2_Survey_Results/"}/>
                    </Box>
                </Box>
                <Divider/>

                {/* Date + Tags */}
                <Box style={{display: "flex", justifyContent: "space-between", flexWrap: "wrap"}}>
                    <PrettyArticleHeading style={{fontSize: "1.2rem"}}>{date}</PrettyArticleHeading>  
                    <Box>
                        <PrettyArticleHeading style={{fontSize: "20px"}} display="inline">
                            Tags:
                        </PrettyArticleHeading>
                        <Typography variant="body1" display="inline" style={{marginLeft: "5px"}}>{tags.join(", ")}</Typography>
                    </Box>         
                </Box>

                {/****************************************** PROBLEM ************************************************************************/}
                <Typography variant="h2" style={{marginTop: "30px"}}>
                    The Problem
                </Typography>
                <Typography variant="body1">
                    One of my closer friends surveyed 54 UofT Electrical and Engineering students graduating in 2023 (ECE2T2s),
                    and asked me to make a data report that would provide <b>descriptive analytics</b> of their life  
                    such as their contentedness, lifestyle choices,  
                    after-grad circumstances etc.. 
                </Typography>
                <div><img src={titleImage} style={{width: "100%", maxWidth: "800px"}}/></div>
                <ImageCaption>ECE2T2 Survey Title Page</ImageCaption>
                <br/><br/>
                <Typography variant="body1">
                For privacy reasons, I am not allowed to share survey data, but it was stored in a csv and was formatted something like this:
                </Typography>
                <Table id="2T2_data_format_table" columns={["Submission ID", "Respondent ID", "Submitted At", "Survey Question 1", "Survey Question 2"]}
                    rows={[[<i>Some Submission #</i>], [<i>Some Uniquely Generated ID</i>], [<i>Some Date</i>], [<i>Respondent Answer 1</i>], [<i>Respondent Answer 2</i>]]}/>
                <ImageCaption>Each row represents survey responses from each respondent.</ImageCaption>{" "}
                <ImageCaption>Questions are located on columns and each answer from each respondent exists under those columns.</ImageCaption>
                
                {/****************************************** SOLUTION *****************************************************************************/}
                <Typography variant="h2" style={{marginTop: "30px"}}>
                    The Solution
                </Typography>
                <Typography variant="body1">
                    <ol>
                        <Typography variant="body1" style={{marginBottom: "5px"}}>
                            <li>Clean Survey Data in Jupyter Notebook</li>
                        </Typography>
                        <Typography variant="body1" style={{marginBottom: "5px"}}>
                            <li>Extract Insight and Make Plotly Visualizations in Jupyter Notebook</li>
                        </Typography>
                        <Typography variant="body1" style={{marginBottom: "5px"}}>
                            <li>Convert Jupyter Notebook to HTML Report</li>
                        </Typography>
                    </ol>
                </Typography>
                <br/>

                 {/****************************************** 1. Cleaning Survey Data *****************************************************************************/}
                <Typography variant="h3">1. Cleaning Survey Data</Typography>              
                <Typography variant="body1">
                        Most multiple choice survey responses are pretty straightforward to clean.
                        For example, for the survey question "How often do you go out?", respondents
                        are only given 1 out of 5 responses to select from. Since the responses are all in text
                        and require no further postprocessing, we can plot the distribution right away.
                </Typography>
                <img src={goOutPerWeek} style={{width: "100%", maxWidth: "600px"}}></img><br/>
                <ImageCaption>Responses to "How often do you go out?"</ImageCaption>
                <br/><br/>
                There are also some survey responses which are trickier to clean in Pandas. For example,
                some overall GPAs are way too low (Below 0.5), while salary information is present in
                different currencies and must be normalized to one currency.
                <br/><br/>
                However, the <b>trickiest data</b> to clean involve survey responses which have no format requirement and 
                are entered by respondent into a text field.
                <br/><br/>
                For example, for survey responses to "Who is your Favourite Prof?", respondents were not
                asked to choose from options, but rather type out their favourite prof in a text field. 
                <br/><br/>
                You already know text field input causes a lot of chaos in responses... For example, check out people e
                ntering one of ECE's professors' names "Tarek Abdelrahman" in all different shapes and forms:<br/><br/>
                <img src={tarekClusters} style={{width: "100%", maxWidth: "700px"}}></img><br/>
                <ImageCaption>Various text fied inputs of Tarek highlighted in yellow</ImageCaption>
                <br/><br/>
                Fortunately, we can use scipy's AP (Affinity Propogation) Clustering <b>machine learning algorithm</b> to 
                group all of these Tarek typos and other typos into one group, then proceed to replace those clusters with 
                the correct ground truth. <br/><br/>To ensure
                the maximum accuracy of these clusters, they are grouped based on string distance metric 
                Longest Common Subsequence, and professor names that require no replacement with ground truth values 
                are also filtered out statistically.
                <br/><br/>
                <img src={textClustering} style={{maxWidth: "800px", width: "100%"}}/>
                <br/>
                <ImageCaption>Here is a gif of the clustering in action!</ImageCaption><br/><br/>
                The methods I implemented for AP Clustering is reasonably accurate and can replace most typos.
                However, it is definitely not perfect and does miss some typos (true negatives) and misidentifies some
                non-typos as typos (false positives).
                <br/><br/> 
                To make up for this error, I make it an option in the code to
                inspect clusters of typos before they are fixed (as seen in the above gif) and allow myself to
                choose Y/N to indicate whether to fix that cluster or not. I also manually fix any typos that
                cannot be fixed by the AP Clustering tool, but the work is minimal thanks to the AP Clustering Algorithm's{" "}
                <b>AI capabilities</b> in automatically identifying and fixing typos.
                <br/><br/> 
                <img src={favTeachers} style={{width: "100%", maxWidth: "800px"}}></img><br/>
                <ImageCaption>Thanks to our trusty machine learning algorithm, we can plot a very clean distribution of
                ECE2T2 students' favourite profs!</ImageCaption>

                {/******************************************************** 2. Extract Insights ***********************************************************/}
                <Typography variant="h2" style={{marginTop: "30px"}}>2. Extract Insight and Make Plotly Visualizations</Typography>
                Making visualizations and finding out the distribution of responses to survey questions is simple enough. Since all survey
                responses are stored in columns as you may have remembered from {" "}<a href="#2T2_data_format_table">table above</a>.
                
                However, some visualizations require analyzing multiple columns. Since the average grade/GPA for each semester is asked in separate questions,
                grades per semester are reported over 8 columns since there are 8 semesters throughout an undergrad degree, and at the time of the survey
                only 7 semesters have progressed (people were doing their final semester) and we also included high school grades in our visualizations, which
                adds up to grade data over 8 time periods.<br/>
                <img src={gradePerSemester} style={{width: "100%", maxWidth: "1100px"}}></img><br/>
                I picked out a few other visualizations which I felt stood out to share with you guys!<br/>
                <Box style={{display: "flex", flexWrap: "wrap", justifyContent: "flex-start", rowGap: "10px", marginTop: "30px"}}>
                    <div><Typography variant="h3">Where did ECE2T2s live first year?</Typography><br/><img src={firstYearLive} 
                    style={{maxWidth:"700px", width:"100%"}}/></div>
                    <div><img src={gradePerceivedHardness} style={{maxWidth:"700px", width:"100%"}}></img></div>
                    <div><Typography variant="h3">How long did it take for ECE2T2s to find a job?</Typography><img src={timeTakenToFindJob} style={{maxWidth:"700px", width:"100%"}}></img></div>
                </Box>

                 {/****************************************** SOLUTION *****************************************************************************/}
                <Typography variant="h2" style={{marginTop: "30px"}}>
                    3. Convert Jupyter Notebook to HTML Report
                </Typography>
                <Typography variant="body1">
                    Finding the most efficient way to convert Jupytre Notebook to HTML report was a challenge, even though I knew what I wanted. 
                    I wanted to use Plotly to generate visualizations, and embed them into some HTML report, but the problem was that I did not
                    know how to programmatically place those visualizations into an HTML document and have them be styled
                    efficiently. I thought about turning my Plotly visualizations into iframes, but I would have to keep track of what css selectors
                    I assign to each iframe to efficiently implement CSS styles. 
                    <br/><br/>
                    It would mean the world if I could programmatically stick my visualizations
                    into an HTML document while also automatically assigning CSS classes and ids to each visualization...
                </Typography>
                <Typography variant="body1">
                    Eventually I did find a solution to achieve exactly I wanted:{" "}
                    <a href="https://nbconvert.readthedocs.io/en/latest/usage.html" target="_blank"><b>nbconvert</b></a>
                    <br/><br/> 
                    <b>nbconvert</b> takes in a Jupyter Notebook as input, and uses JINJA templating to automatically assign selectors
                    to markdown cells, output cells, and you can even customize selectors for specific cells. For example, if I wanted an
                    output cell that had bottom margin, I could simply add a cell tag such as "btm_margin" to a cell, which would give it a 
                    selector "celltag_btm_margin" which I can apply CSS styles onto.
                    <br/><br/>
                    
                    Nbconvert made it possible for me to style my notebook with ease and generate an HTML file which can be published onto the web
                    through GitHub Pages.  
                </Typography>
                <Typography variant="h2" style={{marginTop: "30px"}}>4. Conclusion</Typography>
                I took you through a journey exploring how I cleaned data, extracted insights, and turned my Jupyter Notebook
                into a working piece of beauty hosted on GitHub Pages. Using basic DataFrame data analysis and modern machine learning techniques, 
                we were able to learn much about Graduating Electrical and Computer Engineering students from the Class of 2023, from who
                they are now to what they will become in the future.  
            </ContentWrapper>

        </ContentBackground>
    )
}