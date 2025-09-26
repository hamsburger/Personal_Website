import React, { useMemo } from "react";
import { useLocation } from "react-router-dom";
import AppRoutes from "../../DataModels/allRoutes";
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
  /**
   * LinkGenerator Component
   * 
   * This component generates links based on the current location in the app.
   * It can also accept a custom path to generate links for a specific section.
   * 
   * @param {string} customPath - The custom path to generate links for using /DataModels/allRoutes
   * @param {object} customStyles - Custom styles to apply to the link buttons.
   * @param {boolean} isDynamic - Whether the links are dynamic or not.
   * 
   * @returns {JSX.Element} A list of links generated based on the provided parameters.
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
                    </Button> || <Button style={{...customStyles}}>
                    { key[0].toUpperCase() + key.slice(1)}
                    </Button>
                  }
                </Link>
            )
        }
        </>
    )
}