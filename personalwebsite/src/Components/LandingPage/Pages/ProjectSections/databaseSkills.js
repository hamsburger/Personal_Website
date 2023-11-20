// import React from "react";
// import Typography from "@material-ui/core/Typography";
// import Nutrient_Monitor_Search_Table from "../images/nutrient_monitor_searchtable.PNG";
// import Nutrient_Monitor_Interface from "../images/nutrient_monitor_interface.PNG";
// import Fugitives from "../images/gold_face.png";
// import { makeStyles } from "@material-ui/core";


// const basicInfoStyles = makeStyles((theme) => ({})
// );

// export default ({styles, useStyles}) => {
//     const parentClass = styles();
//     const classes = useStyles();
//     return (<React.Fragment>
//     <div className={parentClass.paragraph}>
//         <Typography variant="h4" component="h5" className={parentClass.heading}>Database Skills</Typography>
//         <Typography variant="h5" component="h5" className={classes.headers}>1.1 Nutrient Monitor</Typography>
//         <Typography variant="body1" component="p" style={{padding: "10px"}}>
//             This <b>React</b> app fetches data from a MySQL Database. The data 
//             originates from the CNF (<a href="https://food-nutrition.canada.ca/cnf-fce/index-eng.jsp">Canadian Nutrient File</a>) database, which I copied and 
//             stored inside my local <b>MySQL</b> database. The process of storage was handled by a <b>Python Script</b>, which was responsible for inserting database tables 
//             and handling the logic of connecting foreign keys. 
//         </Typography>
//         <Typography variant="body1" component="p" style={{padding: "10px"}}>
//             The app's interface consists of a remote table, which fetches 200 rows at a time from database and displays basic information on meals.
//             The queries are <b>Optimized and Tuned</b> 
//         </Typography>
//         <div className={classes.imageContainer}>
//                 <img src={Nutrient_Monitor_Search_Table} className={classes.myImage} alt="Nutrient Monitor Search Table"></img>
//         </div>
//         <Typography variant="body1" component="p" style={{padding: "10px"}}>
//             Users are able to add these foods to a meal plan. The Meal Plan tab provides insightful data visualization for
//             users to assess their nutrition on a day-to-day basis.
//         </Typography>
//         <div className={classes.imageContainer}>
//                 <img src={Nutrient_Monitor_Interface} className={classes.myImage} alt="Nutrient Monitor Interface"></img>
//         </div>

//         <Typography variant="body1" component="p" className={parentClass.projectLink}>
//             Unfortunately, the demo is unavailable, because I do not have the capacity to host a database with millions of entries.
//             I am currently debating whether I should host the project or simply post its Github repository.
//         </Typography> 
//     </div>
//     <div className={parentClass.paragraph}>
//         <Typography variant="h5" component="h5" className={classes.headers}>1.2 Fugitives Website</Typography>
//         <Typography variant="body1" component="p" style={{padding: "10px"}}>
//             A <b>MERN (MySQL + Express + React + Node)</b> stack webapp that lets people learn about fugitives and develop a perspective on whether
//             they should run away from society or stay.
//         </Typography>
//         <div className={classes.imageContainer}>
//                 <img src={Fugitives} className={classes.myImage} alt="Fugitives"></img>
//         </div>  
//         <Typography variant="body1" component="p" style={{padding: "10px"}}>
//             I used the <b>UiPath</b> automation tool to store fugitive information into .csv files.
//             The data is gathered from <a href="https://en.wikipedia.org/wiki/List_of_fugitives_from_justice_who_disappeared">Wikipedia</a>.   
//             Heroku was used to host this website with a <b> Cloud Database </b> to store information on fugitives. 
//             I also implemented a <b> secure login system </b>that stored information for individual users using
//             sessions, but so far, the stored information does not serve any purpose.
//         </Typography>     

//         <Typography variant="body1" component="p" className={parentClass.projectLink}>
//             For demo and more info: <a href="https://github.com/harris222/FugitivesDB">https://github.com/harris222/FugitivesDB</a>
//         </Typography> 
//     </div>
//     {/* <Typography variant="h5" component="h5" className={classes.headers}>1.2 Schedule Manager</Typography> */}
    
//     </React.Fragment>)
// };