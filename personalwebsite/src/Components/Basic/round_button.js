import React from "react";
import generateGlobalButtonColorScheme from "../../Helpers/generateRoundButtonColorScheme";
import { useTheme } from "@material-ui/core";
import {Typography} from "@material-ui/core";

export default function RoundButton({ tag }) {
    const theme = useTheme()
    let tagToColorSchemeDict = generateGlobalButtonColorScheme(theme);
    console.log(tag)
    return <div style={{
        backgroundColor: tagToColorSchemeDict[tag],
        display: "inline-block",
        position: "relative",
        // backgroundColor: "green",
        borderRadius: "50px",
        textAlign: "right",
        marginRight: "5px",
        marginBottom: "5px",
        padding: "5px",
        color: "#FFFFFF"
    }}>
        <div className="circle" style={{
            position: "absolute",
            left: "6px",
            top: "28%",
            height: "14px",
            width: "14px",
            backgroundColor: "white",
            borderRadius: "12px"
        }}></div>
        <Typography variant="body1" style={{marginLeft: "20px", fontSize: "13px", fontWeight: 500}}>
            {tag}
        </Typography>
    </div>
}