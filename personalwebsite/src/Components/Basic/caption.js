import React from "react";

export default function ImageCaption({style, children}){
 return <span style={
    {
        color: "rgb(120, 120, 120)",
        ...style
    }
  }>
    <i>{children}</i>
 </span>
}