import React, { useMemo } from "react";
import { useLocation } from "react-router-dom";
import AppRoutes from "../allRoutes";
import { Route, Routes } from "react-router-dom";
import { routeAccessor } from "../../Helpers/routeAccesor";
import { dictAccessor } from "../../Helpers/dictAccesor";
import { propsDict } from "../../DataModels/models";

export default function RouteGenerator({ customPath, routeDict, isDynamic = false, isRelative = true}){
       /** This Component will generate links based on where it is in the App.
     *  You can also define a customPath to fix the routes being generated.
      */
    const routesToGenerate = routeAccessor(customPath)
    const substituteProps = dictAccessor(customPath, propsDict)
    console.log(routesToGenerate)
    return (
        <Routes>
        {   
            Object.keys(routeDict).map((key) => {
                // console.log(key)
                // console.log(routeDict[key])
                // console.log(substituteProps[key])
                return <Route path={
                    (key === "*" ) && `${key}` || 
                    ((!isRelative) && `/${key}/*` || `${key}/*`)
                } element={React.cloneElement(routeDict[key], 
                    (!substituteProps[key] || !substituteProps[key].hasOwnProperty("props")) ? {} : substituteProps[key]["props"])}
                />
            })
        }
        </Routes>
    )
}