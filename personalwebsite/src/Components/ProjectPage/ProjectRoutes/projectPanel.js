import React from "react";
import { Box, Typography } from "@material-ui/core";

import { propsDict } from "../../../DataModels/models"; 
import { dictAccessor } from "../../../Helpers/dictAccesor";

export default function ProjectPanel({ isHighlight = true, isRow = true, CardElement, desiredPathName }){
    // let desiredPathName = "/projects"
    let UIComponents = dictAccessor(desiredPathName, propsDict)
    return (
        <React.Fragment>
            <Box id="ProjectPanelArea" style={(isHighlight) ? {} : {marginTop: "100px"}}>
                <Typography variant="h2">
                   { (isHighlight) ? "Highlights 🌟" : "Other Projects 👨‍💻" }
                </Typography>         
                <Box id="ProjectPanel" style={{
                    display: "flex",   
                    flexDirection: (isRow) && "row" || "column",
                    justifyContent:"flex-start", 
                    flexWrap:"wrap",
                    marginTop: "10px"
                }}>
                    {Object.entries(UIComponents).map((elem) => {
                        const pathNavigate = `${desiredPathName}/${elem[0]}` 
                        return React.cloneElement(CardElement, {projectRoute: pathNavigate, ...elem[1]["props"]})
                    })}
                </Box>
            </Box>
        </React.Fragment>
    );
}