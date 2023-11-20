import React, {useState, useEffect} from "react";
import BasicInfo from "../Pages/basicInfo";
import Hobbies from "../Pages/hobbies";
import Contacts from "../Pages/contact";
import Interests from "../Pages/interests";
import Projects from "../Pages/projects";
import { makeStyles } from "@material-ui/core/styles";

const basicStyles = makeStyles((theme) => ({
    heading : {
        fontWeight: theme.typography.fontWeightMedium,
        marginBottom: "20px",
    },
    paragraph : {

    }, 
    projectLink : {
        paddingTop: "20px", 
        paddingLeft: "10px", 
        fontWeight: "600"
    },
}));
/**
 *  Name: Content
 *  Description: Store the toggable contents of a banner. 
 *  */
export default ({ title }) => {
    const [content] = useState("Random Content");
    let element = null;
    let textStyles = {
    };
    switch (title){
        case "BasicInfo":
            element = <BasicInfo title={title} styles={basicStyles}/>
            break
        case "ContactInfo":
            element = <Contacts title={title} styles={basicStyles}/>
            break
        case "Interests":
            element = <Interests title={title} styles={basicStyles}/>
            break
        case "Projects":
            element = <Projects title={title} styles={basicStyles}/> 
            break
    }
    // <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
    // <Typography variant="h6" component="div">📞 416-897-9682</Typography>
    // <Typography variant="h6" component="div">📧 harriszheng@live.com</Typography>
    // <Typography variant="h6" component="div" style={{paddingTop: "20px"}}> Github: </Typography>
    // <Typography variant="h6" component="div"> <a href="https://github.com/harris222">https://github.com/harris222</a> </Typography>
    // </div>

    return (<React.Fragment>{element}</React.Fragment>);
};