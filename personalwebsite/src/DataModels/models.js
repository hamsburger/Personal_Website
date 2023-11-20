import DictLevelChecker from "./modelEvaluators/DictLevelChecker"
import AppRoutes from "../Components/allRoutes";
import Website_Design_Nov_18_2023 from "../Components/BlogPage/Pages/Website_Design_Nov_18_2023";
// import Routes from "../Components/allRoutes"


/** 
 * @param {Object[]} URLObjDict: Obj
 * @param {String} URLObjDict[].title: Title of URL object. This is matched with our routes to figure out what content we are actually rendering. 
 * @param {String=} URLObjDict[].uri: URI of URL object
 * 
 * In the future, I want to make URLObjDict read from an external web request
*/

const IS_SERVER = false;
const DOMAIN_NAME = (IS_SERVER) && "" || ""

/** TO-DO: Use Different URLs with Different Dictionary keys, e.g. urlExternal, urlUI, 
 * and don't test these keys in our DictLevelChecker. This way we can support both external 
 * data and React Component Data in one place in our data model. NOTE THAT we will always need more keys
 * in the future.
 */
export const URLObjDict = {
    "urlsExternal" : [
    ],
    "projects" : {
      "LinkedIn_Job_Analysis" : {
            "urlsExternal": [
              
            ],
            "Powerpoint Presentation" : {
              "urlsExternal": [
                {"url" : `${DOMAIN_NAME}/linkedin_analysis/ppt_presentations/ppt_job_presentation.pdf`}
              ]
            },  
            "Job Dashboard" : {
              "urlsExternal" : [
                {"url" : `${DOMAIN_NAME}/linkedin_analysis/tableau_dashboards/tableau_job_dashboard.html`}
              ],
            },
            "Bigram Trigram Dashboard" : {
              "urlsExternal": [
                {"url" : `${DOMAIN_NAME}/linkedin_analysis/tableau_dashboards/tableau_gram_dashboard.html`}
              ],
            },
      },        
      "ECE2T2_Survey" : {
        "urlsExternal" : [
        ]
      },
    },
    // "blogs" : {

    // }
}  

export const propsDict = {
  "projects" : {
    "ECE2T2_Survey" : {
        "props" : {
          "id" : 1,
          "imageFilePath": "/ECE2T2_Survey/class_profile_1_title_page.png",
          "shortDescription" : "Data Visualization of Surveys collected from Graduating Electrical and Computer Engineering Students",
          "date": "June 20, 2023",
          "tags" : ["data_cleaning", "machine-learning", "scikit-learn", "AP-clustering", "data-viz"],
          "isHighlight" : true
        }
    },
    "LinkedIn_Job_Analysis" : {
        "props" : {
          "id" : 2,
          "imageFilePath": "/linkedin_analysis/tableau_title_page.png",
          "shortDescription" : "Tableau Analysis of Data Analyst Job Market in 2022",
          "date": "Nov 1, 2023",
          "tags" : ["bigquery", "tableau", "python", "spacy"],
          "isHighlight" : true
        }
    },
  },
  "blog" : {
      "How_I_Built_This_Website" : {
        "props" : {
          "title" : "How I Built This Website",
          "tags" : ["react", "javascript", "front-end-design", "create-react-app"],
          "date" : "2023-11-17T00:00:00-08:00", // Vancouver Time Release
          "page": <Website_Design_Nov_18_2023/>
        }
      },
      "Ordering_Plotly" : {
        "props" : {  
          "title" : "How I Arranged Text Ordering in Plotly",
          "tags" : ["plotly", "facet-plots", "python", "graph-objects"],
          "date" : "2200-01-01T00:00:00-08:00"
        }
      },
      "Automated_Text_Clustering with Scikit-Learn": {
        "props" : {
          "title" : "Automated Text Clustering with Scikit-Learn",
          "tags": ["scikit-learn", "ap-clusters", "string-distance-metrics"],
          "date" : "2200-01-01T00:00:00-08:00"
        }
      },
      "Relationships_Between_Dataset_Columns" : {
        "props" : { 
          "title" : "How I Use Information Loss to Unravel Relationships between Dataset Columns",
          "tags" : ["information-theory", "entropy", "python", "networkx"],
          "date": "2200-01-01T00:00:00-08:00"
        }
      },
        // "Audioreactive_Music" : {
        //     "title" : "How I Use NASA Space Data to Create AudioVisual Music"
        // }, 
        // "Notion_Turn_Flimsy_Project_Ideas_Into_Reality" : {
        //     "title" : "From Nothing to Everything: How I Turn Flimsy Project Ideas into Reality with Notion"
        // }
  }

  // },
  // "blogs" : {
  //   "" : {
  //     "title" : "How I Built This Website"
  //   },
  //   "Ordering_Plotly" : {
  //     "title" : "How I Arranged Text Ordering in Plotly"
  //   },
  //   "" : {
  //     "title" : "How I Use Information Loss to Unravel Relationships between Dataset Columns"
  //   },
  //   "" : {
  //     "title" : "How I Use NASA Space Data to Create AudioVisual Music"
  //   }, 
  //   "" : {
  //     "title" : "From Nothing to Everything: How I Turn Flimsy Project Ideas into Reality with Notion"
  //   }
  // }
}

/** Check needs to be WAY better. Not checking beyond a minimum level is a poor implementation
 * as you have to update your minimum level to ascertain a deeper and more accurate check
*/
const urlObjChecker = new DictLevelChecker("url_object_checker", 999);
urlObjChecker.userCheckDict(URLObjDict)

const projectCardChecker = new DictLevelChecker("project_card_checker", 999);
projectCardChecker.userCheckDict(propsDict)