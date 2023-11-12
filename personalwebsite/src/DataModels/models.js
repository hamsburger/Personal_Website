import DictLevelChecker from "./modelEvaluators/DictLevelChecker"
import AppRoutes from "../Components/allRoutes";
// import Routes from "../Components/allRoutes"


  /** 
   * @param {Object[]} URLObjDict: Obj
   * @param {String} URLObjDict[].title: Title of URL object. This is matched with our routes to figure out what content we are actually rendering. 
   * @param {String=} URLObjDict[].uri: URI of URL object
   * 
   * In the future, I want to make URLObjDict read from an external web request
  */


export const URLObjDict = {
    "projects" : {
      "LinkedIn_Job_Analysis" : {
            "Job Dashboard" : {
              url : "./tableau_dashboards/tableau_job_dashboard.html",
            },
            "Bigram Trigram Dashboard" : {
              url: "./tableau_dashboards/tableau_gram_dashboard.html",
            },
            "Powerpoint Presentation" : {
              url: "./ppt_presentations/ppt_job_presentation.html"
            }
      },
      "ECE2T2_Survey" : [
      ],
    }
}  

export const projectCardElements = {
  "projects" : {
    "ECE2T2_Survey" : {
        "id" : 1,
        "imageFilePath": require("../Components/ProjectPage/ProjectFiles/ECE2T2_Survey/class_profile_1_title_page.png"),
        "shortDescription" : "Data Visualization of Surveys collected from Graduating Electrical and Computer Engineering Students",
        "tags" : ["data_analysis", "scikit-learn", "jupyter_notebook"],
        "isHighlight" : true
        
    },
    "LinkedIn_Job_Analysis" : {
        "id" : 2,
        "imageFilePath": require("../Components/ProjectPage/ProjectFiles//Linkedin_Data_Analysis/tableau_title_page.png"),
        "shortDescription" : "Tableau Analysis of Data Analyst Job Market in 2022",
        "tags" : ["bigquery", "tableau", "python", "spacy"],
        "isHighlight" : true
    },
  }
}
const urlObjChecker = new DictLevelChecker("url_object_checker", 3);
urlObjChecker.userCheckDict(URLObjDict)

const projectCardChecker = new DictLevelChecker("project_card_checker", 2);
projectCardChecker.userCheckDict(projectCardElements)