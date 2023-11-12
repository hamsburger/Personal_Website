import LinkedInJobAnalysis from "./ProjectRoutes/linkedin";
import Survey2T2 from "./ProjectRoutes/2t2_survey";
import ProjectLandingPage from "./ProjectRoutes/landingPage";

const projectRoute = {
    "ECE2T2_Survey" : <Survey2T2/>, 
    "LinkedIn_Job_Analysis" : <LinkedInJobAnalysis/>,
     "*" : <ProjectLandingPage/>
}

export default projectRoute;
