// App.js
import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  Box,
  MenuItem
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import SearchResults from "./blogResults";
import { propsDict } from "../../DataModels/models";
import { dictAccessor } from "../../Helpers/dictAccesor";
import { Autocomplete } from "@material-ui/lab";
import RouteGenerator from "../Basic/RouteGenerator";
import Blog from "./blog";

const blogStyles = makeStyles((theme) => ({
  tagSearch : {
    [theme.breakpoints.up("xs")] : {
      "width" : "50%"
    },
    [theme.breakpoints.down("sm")] : {
      "width" : "100%"
    }
  },
  searchAdjustments: {
    display: "flex",
    [theme.breakpoints.up("sm")] : {
      flexDirection: "row"
    },
    [theme.breakpoints.down("md")] : {
      flexDirection: "column"
    },
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    // gap: "10px 20px",
  },
  flexButtonAdjustments: { 
  }
}))
const Main = () => {
  // const data = [
  //   { title: "Item 1", tags: ["tag1", "tag2"] },
  //   { title: "Item 2", tags: ["tag2", "tag3"] }
  //   // Add more data as needed
// ];
  let desiredPath = "/blog"
  let pages = (dictAccessor(desiredPath, propsDict))
  let allPages = (
    Object.entries(pages).filter(elem => new Date(elem[1]["props"]["date"]).getTime() < Date.now()) 
  ) // Release pages have dates authored before now
  let routeDict = {}
  routeDict["*"] = <Blog/>
  allPages.forEach(elem => {
    routeDict[elem[0]] = elem[1]["props"]["page"]  
  })
  return <RouteGenerator customPath={desiredPath} routeDict={routeDict}/>
};

export default Main;
