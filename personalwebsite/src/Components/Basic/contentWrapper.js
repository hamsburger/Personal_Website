import React, { forwardRef } from "react";
import { makeStyles } from "@material-ui/core";

const wrapperStyles = makeStyles((theme) => ({
    wrapper: {
        position: "relative",
        lineHeight: "20px",
        height: "100%",
        background: (props) => (props.isTextBox) ? theme.palette.secondary.opaque: "none",
        padding: "20px",
        "& > *" : {
            marginTop: "15px",
        }        
    },
}))

export default function ContentWrapper(props){
    const { children, isTextBox = true} = props; 
    const classes = wrapperStyles({isTextBox: isTextBox})
    return <div className={classes.wrapper}>
        {children}
    </div>

}
