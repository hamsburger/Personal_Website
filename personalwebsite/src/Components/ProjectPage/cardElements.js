import Linkedin_Project from './ProjectFiles/Linkedin_Data_Analysis/linkedin';
import Survey_Project from './ProjectFiles/ECE2T2_Survey/2t2_survey.js'


export default [
    {
        "imageFilePath": require("./ProjectFiles/ECE2T2_Survey/class_profile_1_title_page.png"),
        "Content": Survey_Project,
        "shortDescription" : "Data Visualization of Surveys collected from Graduating Electrical and Computer Engineering Students",
        "projectRoute": "ece2t2_survey",
        "tag" : ["data_analysis", "scikit-learn", "jupyter_notebook"],
        "isHighlight" : true,
        
    },
    {
        "imageFilePath": require("./ProjectFiles/Linkedin_Data_Analysis/" +
        "difficulty_querying_two_tables_of_millions_of_rows_tableau.png"),
        "Content": Linkedin_Project,
        "shortDescription" : "Tableau Analysis of Data Analyst Job Market from 2021-2022",
        "projectRoute": "linkedin",
        "tag" : ["data_analysis", "tableau", "python", "GPT-NeoX20b"],
        "isHighlight" : true
    }
];