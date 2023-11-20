import DictLevelChecker from "../DataModels/modelEvaluators/DictLevelChecker";
import Blog from "./BlogPage/main";
import Projects from "./LandingPage/Pages/projects";
import LandingPage from "./LandingPage/main";
import Music from "./MusicPage/music";
import BasicInfo from "./LandingPage/Pages/basicInfo";
let mainRoute = {
    "music" : <Music/>,
    "blog" : <Blog/>,
    "projects" : <Projects/>,
    "about myself": <BasicInfo/>,
    "*" : <LandingPage/>    
}

const mainChecker = new DictLevelChecker("main_checker", 1);
mainChecker.userCheckDict(mainRoute)

export default mainRoute;