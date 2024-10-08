import React, { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import HTMLFetcher from "../DataFetchers/htmlFetcher";
import PDFFetcher from "../DataFetchers/pdfFetcher";
import ImageFetcher from "../DataFetchers/imageFetcher";


const ProjectContext = createContext(null);

export default function ProjectProvider({ urlRouteDict, children }){
    const [urlRouteDictCopy, updateURLRouteDict] = useState({});

    let fileExtensionPattern = /\.[0-9a-z]+$/i
    let promises = []
    function findAndFetchURLs(dictObj){
        /** Assumption: All URIs exist at leaf nodes */
        if (dictObj === undefined) return true
        if (dictObj.hasOwnProperty("urlsExternal")){
            for (let urlObj of dictObj["urlsExternal"]){
                // console.log(urlObj)
                let matchString = urlObj["url"].match(fileExtensionPattern)[0]
                switch (matchString.toLowerCase()){
                    case ".html":
                        /* Inplace Replacement */
                        urlObj["type"] = ".html"
                        // promises.push(HTMLFetcher(
                        //     urlObj
                        // ));
                        promises.push(HTMLFetcher(
                            urlObj
                        ).then((elem) => {
                            urlObj['rendered_content'] = elem
                            return urlRouteDict
                        }).catch(e => { throw e }))
                        break;
                    case ".pdf":
                        promises.push(PDFFetcher(
                            urlObj
                        ).then((elem) => {
                            urlObj['rendered_content'] = elem
                            return urlRouteDict
                        }).catch(e => { throw e }))
                        break;
                    case ".jpg", ".png":
                        promises.push(ImageFetcher(
                            urlObj
                        )).then((elem) => {
                            urlObj['rendered_content'] = elem
                            return urlRouteDict
                        }).catch(e => { throw e })
                        break;
                    default:
                        throw Error("Unknown Promise Type: ", urlObj.type)
                }    
            }  
        }
        return Object.keys(dictObj).filter(elem => elem !== "urlsExternal").every((key) => (
            findAndFetchURLs(dictObj[key])
        ))      
    }

    useEffect(() => {
        findAndFetchURLs(urlRouteDict)
        Promise.all(promises).then((routeDicts) => {
            updateURLRouteDict(routeDicts.slice(-1)[0])
        })
    }, [])  
        // for (let route of Object.keys(urlRouteDict)){
        //         for (let [key, urlObjDict] of Object.entries(urlRouteDict[route])){
        //             for (let urlObj of urlObjDict){
        //                 let matchString = urlObj.url.match(fileExtensionPattern)[0]
        //                 switch (matchString.toLowerCase()){
        //                     case ".html":
        //                         /* Inplace Replacement */
        //                         urlObj["type"] = ".html"
        //                         urlObj["page"] = `${route}/${key}`
        //                         // promises.push(HTMLFetcher(
        //                         //     urlObj
        //                         // ));
        //                         HTMLFetcher(
        //                             urlObj
        //                         ).then((elem) => {
        //                             urlObj['rendered_content'] = elem
        //                         }).catch(e => { throw e })
        //                         break;
        //                     default:
        //                         throw Error("Unknown Promise Type: ", urlObj.type)
        //                 }
        //             }
        //         }
        // }
        //  Promise.all(promises)
        //  .then((urlDicts) => {

        //     console.log("In Place URL Route Dict", urlRouteDict)
        //     console.log("Resolved urlDicts", urlDicts)
        //     updateProjects(
        //         urlDicts.reduce((r, c) => ({
        //             ...r, ...c              
        //         }), {})
        //     )
        //  })
           //  .catch(e => {throw e})
    return <ProjectContext.Provider value={urlRouteDictCopy}>
        {children}
    </ProjectContext.Provider>
}

export function useData(){
    return useContext(ProjectContext)
}