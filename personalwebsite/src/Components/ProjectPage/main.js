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
import Projects from "../allRoutes";
import ProjectLandingPage from "./ProjectRoutes/landingPage";
import ContentBackground from "../Basic/contentBackground";
import { UIObjects } from "../../DataModels/models";
import RouteGenerator from "../Basic/RouteGenerator";
import projectRoute from "./thisRoute";

export default () => {
    return (          
            <RouteGenerator routeDict={projectRoute} customPath={"/projects"}/>
    )
}       