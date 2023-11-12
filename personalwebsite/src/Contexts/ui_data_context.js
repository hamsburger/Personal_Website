import React, { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import HTMLFetcher from "../DataFetchers/htmlFetcher";
import PPTFetcher from "../DataFetchers/pptFetcher";

const UIDataContext = createContext(null);

export default function UIDataProvider({ UIObjDict, children }){
    /** 
     * @typedef {Object} UIObj
     * @typedef {Array<UIObj>} UIObjs
     * @param {Object<String,  UIObjs>} UIObjDict
    */

    return <UIDataContext.Provider value={UIObjDict}>
        {children}
    </UIDataContext.Provider>
}

export function useUIData(){
    return useContext(UIDataContext)
}