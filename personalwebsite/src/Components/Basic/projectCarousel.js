import React, { useMemo, useState } from "react";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { Link, Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import { useData } from "../../Contexts/external_data_context";
import ContentWrapper from "./contentWrapper";
import { Typography, makeStyles } from "@material-ui/core";
import LinkGenerator from "./LinkGenerator";
import { routeAccessor } from "../../Helpers/routeAccesor";
import { dictAccessor } from "../../Helpers/dictAccesor";

const carouselStyles = makeStyles((theme) => ({
    buttonBox: {
        "& button" : {
            marginRight: "24px",
            background: "transparent",
            boxShadow: "none",
            top: -10
        },
        "& button:hover" : {
            textDecoration: "underline",
            background: "transparent",
            boxShadow: "none",
        }
    },
    smtSpinnerCircle : {
        width: "50px",
        height: "50px",
        position: "relative",
        margin: "20px",
        borderRadius: "50%",
        zIndex: 1,
    },
    
    smtSpinner : {
        height: "100%",
        width: "100%",
        borderRadius: "50%",
        borderRight: "2px solid rgba(255,255,255,0.6)",
        borderTop: "2px solid blue",
        borderLeft: "2px solid blue",
        borderBottom: "2px solid blue",
        animation: "rotate--spinner 1.6s infinite"
      },
      "@global":{
        "@keyframes rotate--spinner" : {
            "from" : {
            transform: "rotate(0)"
            },
            "to" : {
            transform: "rotate(360deg)"
            },
        }
      }
}))
export default function ProjectCarousel({ customPath, galleryMode = true }){
    /** 
     * @param {Object[]} urlObjects: 
     * @param {String} urlObjects[].url: URI of URL object
     * @param {String} urlObjects[].title: Title of URL object. This is matched with our routes to figure out what content we are actually rendering. 
    */
    const location = useLocation();
    const [animation, triggerLoadAnimation] = useState(false);
    const data = useData();
    console.log("Custom Path:", customPath)
    console.log("Data:", data)
    const classes = carouselStyles();
    if (Object.keys(data).length === 0) return <></>
    const routesToGenerate = routeAccessor(customPath)    
    const dataObjs = dictAccessor(customPath, data)
    let firstObj = Object.values(dataObjs)[0]
    // console.log(Object.keys(firstObj))
    // console.log("Routes to Generate", routesToGenerate)
    // console.log("Data Objs", dataObjs);

    
    // console.log(Object.values(dataObjs)[0]["rendered_content"])

    /** Can we return objects from states and use them? Instead of just expecting them to be components */
    // const urlObjects = useMemo(urlRouteDict[projectPage], [])

    // const urlObjectsCleaned = useMemo(
    //     () => urlObjects.map(urlObj => ({
    //         ...urlObj,
    //         title: urlObj.title.split(" ").join("_")
    //     }))
    // , [urlObjects]);
    // const classes = carouselStyles();
    switch (galleryMode) {
        case true:
            return (
                <ContentWrapper isTextBox={true}>
                    <Box className={classes.buttonBox}>
                        <LinkGenerator customPath={customPath} customStyles={
                            {
                                variant: "contained",
                                onClick: () => triggerLoadAnimation(true)
                            }
                        }/>
                    </Box>
                    {
                        (animation) && (<div style={{position: "absolute"}}>
                            <div className={classes.smtSpinnerCircle}>
                                    <div className={classes.smtSpinner}/>
                            </div>
                        </div>)
                    }
                    <Routes>
                    {  
                        /**
                         *  Create Routes to Elements for Links
                         */ 
                        Object.entries(dataObjs).map((dataObj, index) => {
                            return <Route key={index} path={`${dataObj[0]}`} element={dataObj[1]["rendered_content"]}/>
                        })
                    }
                        <Route path="*" element={firstObj["rendered_content"]}/>
                    </Routes>
                </ContentWrapper>
            )
        default:
            return (<div>Hi</div>)
    }
}