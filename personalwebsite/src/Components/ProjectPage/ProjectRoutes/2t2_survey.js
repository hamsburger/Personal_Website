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
import linkStyles from "../../../Helpers/createLinkStylesArticle";
import ReactEmbedGist from "react-embed-gist";

export default function Survey2T2({ tags, date }){
    const theme = useTheme()
    const classes = linkStyles()
    return (
        <ContentBackground>
            <ContentWrapper opacity={0.9}>
                {/* Title and Icon Header */}
                <Box style={{display: "flex", justifyContent: "space-between", flexWrap: "wrap"}}>
                    <PrettyArticleHeading style={{fontWeight: 600}}>
                        UofT ECE2T2 Student Life Survey
                    </PrettyArticleHeading>
                    <Box className={classes.surveyLinks}>
                        <SocialsItem Icon={<GitHub/>} title={"GitHub Repo"} link={"https://github.com/hamsburger/ECE2T2_Survey_Data_Report/blob/53108d3d529c4f883e46898c261cbdd8e200add4/ECE_Fourth_Year_Opinions.ipynb"}/>
                        <SocialsItem Icon={<Language/>} title={"Final HTML Report"} link={"https://hamsburger.github.io/ECE2T2_Survey_Data_Report/"}/>
                    </Box>
                </Box>
                <Divider/>

                {/* Date + Tags */}
                <Box style={{display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "10px 0px"}}>
                    <PrettyArticleHeading variant="h1" style={{fontSize: "1.2rem"}}>{date}</PrettyArticleHeading>  
                    <Box>   
                        <PrettyArticleHeading style={{fontSize: "20px"}} display="inline">
                            Tags:
                        </PrettyArticleHeading>
                        <Typography variant="body1" display="inline" component={"div"} style={{marginLeft: "5px", position: "relative", top: "-1px"}}>
                            {tags.join(", ")}
                        </Typography>
                    </Box>         
                </Box>

                {/****************************************** PROBLEM ************************************************************************/}
                <Typography variant="h2" style={{marginTop: "30px"}}>
                    The Problem
                </Typography>
                <Typography variant="body1">
                    One of my closer friends surveyed 54 UofT Electrical and Engineering students graduating in 2023 (ECE2T2s),
                    and asked me to make a data report that would provide <b>descriptive analytics</b> of their life  
                    such as contentedness, lifestyle choices, after-grad circumstances etc.. The goal of the project is to host the data report on a website 
                    by June 20th, 2023, the day of graduation ceremony for ECE2T2s, so that graduating students would be able 
                    to look back on their University life as well as future endeavours.
                </Typography>
                <div><img src={titleImage} style={{width: "100%", maxWidth: "800px"}}/></div>
                <ImageCaption>ECE2T2 Survey Title Page</ImageCaption>
                <br/><br/>
                <Typography variant="body1">
                For privacy reasons, I am not allowed to share survey data, but it was stored in a csv and was formatted something like this:
                </Typography>
                <Table id="2T2_data_format_table" columns={["Submission ID", "Respondent ID", "Submitted At", "Survey Question 1", "Survey Question 2"]}
                    rows={[[<i>Some Survey Submission #</i>], [<i>Some Uniquely Generated ID</i>], [<i>Some Date</i>], [<i>Respondent Answer 1</i>], [<i>Respondent Answer 2</i>]]}/>
                <ImageCaption>Each row represents a survey response submitted by a respondent.</ImageCaption>{" "}
                <ImageCaption>A survey response contains some identifiers, the date on which the response was submitted, and answers to certain survey questions.
                </ImageCaption>
                
                {/****************************************** SOLUTION *****************************************************************************/}
                <Typography variant="h2" style={{marginTop: "30px"}}>
                    The Solution <a href="https://github.com/hamsburger/ECE2T2_Survey_Results/blob/main/ECE_Fourth_Year_Opinions.ipynb" target="_blank">(Link to Code)</a>
                </Typography>
                <Typography variant="body1">
                    In theory, all I need to do is to plot the distribution of respondent answers to survey questions.
                </Typography>
                <Typography variant="body1">
                    But in practice, there is a bit of research involved, and a <b>LOT</b> of visualizations (About 124...) I need to figure out. As the sole developer
                    in this project, I need to plan accordingly and accomplish the following tasks to complete the UofT Student Life Survey:
                </Typography>
                <Typography variant="body1">
                    <ol>
                        <Typography variant="body1" style={{marginBottom: "5px"}}>
                            <li>Clean Survey Data in Prepation for Analysis</li>
                        </Typography>
                        <Typography variant="body1" style={{marginBottom: "5px"}}>
                            <li>Observe Interesting Relationships in Data</li>
                        </Typography>
                        <Typography variant="body1" style={{marginBottom: "5px"}}>
                            <li>Make (and Automate!) Plotly Visualizations in Jupyter Notebook</li>
                        </Typography>
                        <Typography variant="body1" style={{marginBottom: "5px"}}>
                            <li>Convert Jupyter Notebook to HTML Report</li>
                        </Typography>
                    </ol>
                </Typography>
                <br/>
                 {/****************************************** 1. Cleaning Survey Data *****************************************************************************/}
                <Typography variant="h3">1. Clean Survey Data in Preparation for Analysis</Typography>              
                <Typography variant="body1">
                        Most multiple choice survey responses are straightforward to clean.
                        For example, for the survey question "How often do you go out?", respondents
                        are only given 1 out of 5 responses to select from. Since the responses are all in text
                        and require no further postprocessing, we can plot the distribution right away.
                </Typography>
                <img src={goOutPerWeek} style={{width: "100%", maxWidth: "600px"}}></img><br/>
                <ImageCaption>Responses to "How often do you go out?", "count" denoting number of students who recorded a specific response</ImageCaption>
                <br/><br/>
                Other types of responses that need to be cleaned include GPA too low (Below 0.5), salary information recorded in
                different currency, which can be dealt with by respectively filtering data and doing some currency conversions in Python. 
                However, free text responses cannot be cleaned as easily. These survey responses have no format requirement and can input any arbitrary response.
                For example, for survey responses to "Who is your Favourite Prof?", respondents were not
                asked to choose an answer from multiple choice, but rather type out their favourite professor name into a text field. 
                <br/><br/>
                And... You can already guess what the <b>problem with free text fields</b> are. Respondents may refer to a single idea in multiple ways, 
                or they may simply make a typo and append to the already <i>everlasting, neverending</i> list of ways to refer to a single idea. 
                <br/><br/>
                As an example, check out 
                student respondents entering one of the UofT ECE professor names "Tarek Abdelrahman" in all different shapes and forms:<br/><br/>
                
                <img src={tarekClusters} style={{width: "100%", maxWidth: "700px"}}></img><br/>
                <ImageCaption>Various text fied inputs of Tarek highlighted in yellow</ImageCaption>
                <br/><br/>
                Fortunately, we can use sklearn's AP (Affinity Propogation) Clustering <b>unsupervised learning algorithm</b> to 
                group all similar ideas into one group, such as Tarek's different alias, then proceed to replace those clusters with 
                a ground truth value. In order to get the clustering to work, however,
                I first needed to select an adequate string distance metric to ensure my clusters converged.
                <br/><br/>
                Initially, I leaned towards Levenshtein Distance as the adequate string distance metric. However, I quickly realized that
                it wasn't perfect for my use case.
                <br></br>
                string distance metric 
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