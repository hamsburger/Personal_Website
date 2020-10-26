import React from "react";
import Typography from "@material-ui/core/Typography";
import Magellan from "../../../images/magellan.png";
import Baby_Photo from "../../../images/baby_photo.PNG";
export default ({styles, useStyles}) => {
    const parentClass = styles();
    const classes = useStyles();

    // Magellan
    return (<React.Fragment>
    <div className={parentClass.paragraph}><Typography variant="h4" component="h5" className={parentClass.heading}>Front-End Dev
    </Typography>
    <Typography variant="h5" component="h5" className={classes.headers}>1.1 Magellan Scraper</Typography>
    <Typography variant="body1" component="p" style={{padding: "10px"}}>
        A <b>JavaScript + Sass </b> WebApp that helps engineering students manage information on Engineering credits.
        I believe on UofT's Magellan webesite, where students can view their engineering credits, 
        it takes too many clicks for them to access information. Thus, I built a web platform myself to view them.
    </Typography>
    <div className={classes.imageContainer}>
        <img src={Magellan} className={classes.myImage}></img>
    </div>
    <Typography variant="body1" component="p" className={parentClass.projectLink}>
        For demo and more info: <a href="https://github.com/harris222/Magellan.info">https://github.com/harris222/Magellan.info</a>
    </Typography> 
    </div>

    {/* Baby Photo Website */}
    <div className={parentClass.paragraph}>
    <Typography variant="h5" component="h5" className={classes.headers}>1.2 Baby Photo Website</Typography>
    <Typography variant="body1" component="p" style={{padding: "10px"}}>
        The <b>PHP</b> website has uses for two groups of people in my school: Yearbook Editors, and Students. Students
        upload photos and quotes on the website so that they can be uploaded to the school yearbook,
        while yearbook editors are responsible for validating content that is appropriate and removing content that is not.  
    </Typography>
    <div className={classes.imageContainer}>
        <img src={Baby_Photo} className={classes.myImage}></img>
    </div>
    <Typography variant="body1" component="p" className={parentClass.projectLink}>
        For demo and more info: <a href="http://photosubmissiondemo.epizy.com/admin.php">http://photosubmissiondemo.epizy.com/admin.php</a>
    </Typography> 
    </div>
    </React.Fragment>);
};