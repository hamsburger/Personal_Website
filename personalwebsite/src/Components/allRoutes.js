// import Linkedin_Project from './ProjectPage/ProjectRoutes/linkedin.js';
// import Survey_Project from './ProjectPage/ProjectRoutes/2t2_survey.js'
// import ProjectLandingPage from './ProjectPage/ProjectRoutes/landingPage.js';
// import LandingPage from './LandingPage/main.js';
// import Music from './MusicPage/music.js';
// import Blog from './BlogPage/blog.js';
// import Project from './LandingPage/Pages/projects.js';

const AppRoutes = {
    "projects" : {
        "content" : null,
        "ECE2T2_Survey" : {
            "content": null,
        },
        "LinkedIn_Job_Analysis" : {
            "content": null,
            "Job Dashboard" : null,
            "Bigram Trigram Dashboard" : null,
            "Powerpoint Presentation" : null
        },
        "*" : {
            "content": null,
        } 
    },
    "music" : {
        "content" : null,
    },
    "blog" : {
        "content" : null,
    },
    "*" : {
        "content" : null
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