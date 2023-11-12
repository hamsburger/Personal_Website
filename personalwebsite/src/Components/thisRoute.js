import DictLevelChecker from "../DataModels/modelEvaluators/DictLevelChecker";
import Blog from "./BlogPage/blog";
import Projects from "./LandingPage/Pages/projects";
import LandingPage from "./LandingPage/main";
import Music from "./MusicPage/music";

let mainRoute = {
    "music" : <Music/>,
    "blog" : <Blog/>,
    "projects" : <Projects/>,
    "*" : <LandingPage/>    
}

const mainChecker = new DictLevelChecker("main_checker", 1);
mainChecker.userCheckDict(mainRoute)

export default mainRoute;