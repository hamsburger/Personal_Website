import React from "react";
import { Typography, useTheme } from "@material-ui/core";
export default function PrettyArticleHeading({ children, variant = "h1", style, ...props}){
   const theme = useTheme();
   return <Typography variant={variant} style={{
        fontSize: "2.5rem",
        ...style
    }}  
    {...props}>
        {children}
    </Typography>
}