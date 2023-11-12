import { makeStyles } from "@material-ui/core";
import React from "react";
import PastelKitchen from "../LandingPage/ContentPage/images/magic_shop_cropped.jpg";

const backgroundStyles = makeStyles((theme) => ({
    contentLayout : {
        // positioning
        position: "relative",
        width: "100%",  
        height: "100%",
        zIndex: 1,
  
        "&::after" : {
          content: "''",
          position: "absolute",
          width: "100%", 
          height: "100%",
          // Spacing parameters
          backgroundBlendMode: "screen",
          backgroundColor: "rgba(119,180,199,1)",
          background: `url(${PastelKitchen})`,
          zIndex: -1,
          backgroundSize: "50% auto",
          opacity: 0.6,
          top: 0,
          left: 0,
          bottom: 0,
          right:0
        },
        
        lineHeight: "30px",
        padding : 0,  
        // display: props => props.contentView ? "block" : "none",
        transition: "width 0.5s",
    }  
}));

export default function ContentBackground({children}){
    const classes = backgroundStyles();
    return (
        <div className={classes.contentLayout}>
            {children}
        </div>
    )
    
}