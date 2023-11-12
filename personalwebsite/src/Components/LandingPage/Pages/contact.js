import React from "react";
import Typography from "@material-ui/core/Typography";
export default (() => (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
    <Typography variant="h6" component="div">Email:</Typography>
    <Typography variant="h6" component="div">📧 harriszheng@live.com</Typography>
    <Typography variant="h6" component="div" style={{paddingTop: "20px"}}> Github: </Typography>
    <Typography variant="h6" component="div"> <a href="https://github.com/harris222">https://github.com/harris222</a> </Typography>
    </div>
));

