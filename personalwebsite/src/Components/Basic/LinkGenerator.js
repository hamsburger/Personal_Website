import React, { useMemo } from "react";
import { useLocation } from "react-router-dom";
import AppRoutes from "../allRoutes";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";
import { routeAccessor } from "../../Helpers/routeAccesor";
const linkStyles = makeStyles((theme)=>({
    button : {
      background: "transparent",
      color: "white",
      textUnderlineOffset: "none",
      ...theme.typography.overline_pretty,
      fontSize: "1rem",
      textDecoration: "underline",
      fontWeight: 500,
      height: "40px",
      "&:hover" : {
        color: "black",
        background: "rgba(255, 255, 255, 0.8)",
      }
    }
  }));
  
export default function LinkGenerator({ customPath, customStyles, isDynamic = false}){
    /** This Component will generate links based on where it is in the App.
     *  You can also define a customPath to fix the links being generated.
      */  
    const classes = linkStyles();
    const routesToGenerate = routeAccessor(customPath)
    return (
        <>
        {
          Object.keys(routesToGenerate).filter(key => key !== "*" && key !== "content").map(key => 
                <Link to={`${key}`}>
                  {
                    (!customStyles) && <Button className={classes.button}>
                      { key[0].toUpperCase() + key.slice(1)}
                    </Button> || <Button {...customStyles}>
                    { key[0].toUpperCase() + key.slice(1)}
                    </Button>
                  }
                </Link>
            )
        }
        </>
    )
}