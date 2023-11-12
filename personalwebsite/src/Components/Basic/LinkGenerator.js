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
  
export default function LinkGenerator({ customPathName, customStyles, isDynamic = false}){
    /** This Component will generate links based on where it is in the App.
     *  You can also define a customPathName to fix the links being generated.
      */
    const classes = linkStyles();
    const location = useLocation();
    const pathName = customPathName || location.pathname;
    const routesToGenerate = useMemo(
      () => routeAccessor(pathName)
    , (!isDynamic) && [] || [pathName])
    return (
        <>
        {
          Object.keys(routesToGenerate).filter(key => key !== "*" && key !== "/").map(key => 
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