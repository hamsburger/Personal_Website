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
      textUnderlineOffset: "none",
      ...theme.typography.overline_pretty,
      fontSize: "20",
      textDecoration: "underline",
      fontWeight: 500,
    }
  }));
  
export default function LinkGenerator({ customPath, customStyles, isDynamic = false}){
    /** This Component will generate links based on where it is in the App.
     *  You can also define a customPath to fix the links being generated.
      */
    const location = useLocation();  
    const classes = linkStyles();
    const pathName = customPath || location.pathname;
    const routesToGenerate = useMemo(
      () => routeAccessor(pathName)
    , (!isDynamic) && [] || [pathName])
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