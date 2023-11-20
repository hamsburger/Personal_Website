import React, { forwardRef } from "react";
import { makeStyles } from "@material-ui/core";

const wrapperStyles = makeStyles((theme) => ({
    wrapper: {
        position: "relative",
        lineHeight: 1.5,
        height: "100%",
        minHeight: props => props.minHeight || "inherit",
        // minHeight: "100vh",
        background: (props) => {
            if (props.opacity >= 0) return `rgba(224,232,243, ${props.opacity})`
            if (props.isTextBox) return theme.palette.secondary.opaque
            return "none"
        },

        padding: props => props.padding || "20px",
        paddingTop: "30px",
        [theme.breakpoints.down("xs")] : {
          paddingLeft: props => props.paddingMobile || "15px",
          paddingRight: props => props.paddingMobile || "15px",  
        },
        
        "& > *": {  
            marginBottom: props => props.childrenMarginBottom || "15px",
        }
    },
}))

export default function ContentWrapper(props){
    const { children, isTextBox = true, opacity, styles={}, padding, minHeight, childrenMarginBottom, ...otherProps} = props;  // opacity, isTextBox
    const classes = wrapperStyles({isTextBox, opacity, padding, minHeight, childrenMarginBottom, ...otherProps})
    return <div className={classes.wrapper} style={styles} {...otherProps}>
        {children}
    </div>

}
