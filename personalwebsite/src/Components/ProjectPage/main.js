import React, {useEffect} from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { 
    BrowserRouter,
    Routes,
    Route,
    useNavigate,
    useLocation
} from "react-router-dom";
import { Box } from "@material-ui/core";
import { useTheme } from "@material-ui/core";
import ProjectCard from '../card';
import Projects from "./cardElements";
import LandingPage from "./ProjectRoutes/landingPage";

export default () => {
    const theme = useTheme();
    const location = useLocation();
    return (          
        <React.Fragment>
        <Box id="Box_Background" style={{paddingLeft: "20px", paddingTop: "20px", background: "#f0f0f0"}}> 
            <Routes>
                {
                    Projects.map((elem, index) => (
                        <Route path={elem["projectRoute"]} element={`Hi ${index}`}/>
                    ))
                }
                <Route path="/" element={<LandingPage/>}/>
            </Routes>
        </Box>
        </React.Fragment>
    )
}