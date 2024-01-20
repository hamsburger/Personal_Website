// import Linkedin_Project from './ProjectPage/ProjectRoutes/linkedin.js';
// import Survey_Project from './ProjectPage/ProjectRoutes/2t2_survey.js'
// import ProjectLandingPage from './ProjectPage/ProjectRoutes/landingPage.js';
// import LandingPage from './LandingPage/main.js';
// import Music from './MusicPage/music.js';
// import Blog from './BlogPage/blog.js';
// import Project from './LandingPage/Pages/projects.js';

const AppRoutes = {
    "projects" : {
        "ECE2T2_Survey" : {
        },
        "LinkedIn_Job_Analysis" : {
            "Job Dashboard" : null,
            "Bigram Trigram Dashboard" : null,
            "Powerpoint Presentation" : null,
        },
        "*" : {
        } 
    },
    "blog" : {
        "How_I_Built_This_Website" : {
            "title" : "How I Built This Website"
        },
        "Ordering_Plotly" : {
            "title" : "How I Arranged Text Ordering in Plotly"
        },
        "Automated_Text_Clustering with Scikit-Learn": {
            "title" : "Automated Text Clustering with Scikit-Learn"
        },
        "Relationships_Between_Dataset_Columns" : {
            "title" : "How I Use Information Loss to Unravel Relationships between Dataset Columns"
        },
        "Audioreactive_Music" : {
            "title" : "How I Use NASA Space Data to Create AudioVisual Music"
        }, 
        "Notion_Turn_Flimsy_Project_Ideas_Into_Reality" : {
            "title" : "From Nothing to Everything: How I Turn Flimsy Project Ideas into Reality with Notion"
        }
    },
    "music" : {
    },
    "about myself" : {
    },
    
    "*" : {
    },
      
}

export default AppRoutes;
// const projectCards = {
//     "ECE2T2_Survey" : {
//         "id" : 1,
//         "imageFilePath": require("./ECE2T2_Survey/class_profile_1_title_page.png"),
//         "content": <Survey_Project/>,
//         "shortDescription" : "Data Visualization of Surveys collected from Graduating Electrical and Computer Engineering Students",
//         "projectRoute": "ece2t2_survey",
//         "tags" : ["data_analysis", "scikit-learn", "jupyter_notebook"],
//         "isHighlight" : true
        
//     },
//     "LinkedIn_Job_Analysis" : {
//         "id" : 2,
//         "imageFilePath": require("./Linkedin_Data_Analysis/tableau_title_page.png"),
//         "content": <Linkedin_Project/>,
//         "shortDescription" : "Tableau Analysis of Data Analyst Job Market in 2022",
//         "projectRoute": "linkedin",
//         "tags" : ["bigquery", "tableau", "python", "spacy"],
//         "isHighlight" : true
//     },
//     "*" : {
//         "content" : <ProjectLandingPage/> 
//     }
// };

// export default projectCards;