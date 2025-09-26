import { makeStyles } from "@material-ui/core";
import React from "react";
import PastelKitchen from "../LandingPage/ContentPage/images/magic_shop_cropped.jpg";
import { useLocation } from "react-router-dom";

const backgroundStyles = makeStyles((theme) => ({
    contentLayout : {
        // positioning
        position: "relative",
        width: "100%",  
        zIndex: 0,
        minHeight: props => props.minHeight,   
        overflowY: "hidden",
        "&::after" : {
          content: "''",
          position: "absolute",
          width: "100%", 
          overflowY: "hidden",
          minHeight: props => props.minHeight,
        //   Spacing parameters
          backgroundBlendMode: "screen",
          backgroundImage: (props) => (props.fill) ? "none" : `url(${PastelKitchen})`,
          backgroundColor: (props) => props.backgroundColor || theme.palette.primary.main,
          backgroundSize: "50% auto",
          zIndex: -1,
          opacity: (props) => (props.opacity) ? props.opacity : 0.7,
          top: 0,
          left: 0,
          bottom: 0,
          right:0.
        },
        
        lineHeight: "30px",
        padding : 0,  
        // display: props => props.contentView ? "block" : "none",
        transition: "width 0.5s",
    }  
}));

export default function ContentBackground({ fill = "true", backgroundColor = "white", opacity = 1, children }){
  /**
   * ContentBackground component
   * 
   * This component provides a background layout for content pages.
   * It uses Material-UI's makeStyles to style the component.
   * 
   * @param {object} props
   * @param {boolean} props.fill - Whether to fill the background with an image.
   * @param {string} props.backgroundColor - The background color of the component.
   * @param {number} props.opacity - The opacity of the background image.
   * @param {node} props.children - The content to be rendered inside the component.
   */
  
    const location = useLocation();
    let minHeight;
    if (location.pathname !== "/") minHeight = "100vh"
    else minHeight = "none"

    const classes = backgroundStyles({ fill, backgroundColor, opacity, minHeight});
    return (
        <div className={classes.contentLayout}>
                {children}
        </div>
    )
    
}