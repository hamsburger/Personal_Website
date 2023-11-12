import React, { useMemo } from "react";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { Link, Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import { useData } from "../../Contexts/external_data_context";
import CarouselItem from "./carouselItem";
import ContentWrapper from "./contentWrapper";
import { makeStyles } from "@material-ui/core";
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
        position: "absolute",
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
export default function ProjectCarousel({ galleryMode = true }){
    /** 
     * @param {Object[]} urlObjects: 
     * @param {String} urlObjects[].url: URI of URL object
     * @param {String} urlObjects[].title: Title of URL object. This is matched with our routes to figure out what content we are actually rendering. 
    */
    const classes = carouselStyles();
    const desiredPathName = "/projects/LinkedIn_Job_Analysis";
    const data = useData();
    const dataObjs = dictAccessor(desiredPathName, data)

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
                        <LinkGenerator 
                        customPathName={desiredPathName}
                        customStyles={
                            {
                                variant: "contained"
                            }
                        }/>
                    </Box>
                    <Box>
                        <div className={classes.smtSpinnerCircle}>
                            <div className={classes.smtSpinner}/>
                        </div>
                        <Routes>
                            
                                {  
                                    /**
                                     *  Create Routes to Elements for Links
                                     */
                                    Object.entries(dataObjs).map((dataObj, index) => {
                                        return <Route path={`${dataObj[0]}/*`} element={dataObj[1]["rendered_content"]}/>
                                                })
                                }
                            <Route path="*" element={Object.values(dataObjs)[0]["rendered_content"]}/>
                        </Routes>
                    </Box>
                </ContentWrapper>
            )
        default:
            return (<div>Hi</div>)
    }
}