import React, { useMemo } from "react";
import { useLocation } from "react-router-dom";
import AppRoutes from "../allRoutes";
import { Route, Routes } from "react-router-dom";
import { routeAccessor } from "../../Helpers/routeAccesor";

export default function RouteGenerator({ customPathName, routeDict, isDynamic = false, isRelative = true}){
       /** This Component will generate links based on where it is in the App.
     *  You can also define a customPathName to fix the routes being generated.
      */
    const location = useLocation();
    const pathName = customPathName || location.pathname;
    const routesToGenerate = useMemo(
        () => routeAccessor(pathName)    
    , (!isDynamic) && [] || [pathName])
    return (
        <Routes>
        {
            Object.keys(routesToGenerate).map((key) => (
                <Route path={
                    (key === "*" || key === "/") && `${key}` || 
                    ((!isRelative) && `/${key}/*` || `${key}/*`)
                } element={routeDict[key]}/>
              ))
        }
        </Routes>
    )
}