import React from "react";
import { 
    Card, 
    CardContent, 
    CardActions,
    CardMedia,
    CardHeader
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { 
    BrowserRouter,
    Routes,
    Route,
    useNavigate
} from "react-router-dom";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const cardStyles = makeStyles((theme) => ({
    card : {
        // display: "flex",
        width: "500px",
        margin: "20px",
        marginLeft: "0px",
        borderRadius: "30px",
        cursor: "pointer"
        // maxWidth: "50%"
    },

    imageBox : {
        display: "flex",
        width: "100%",
    }
}));

export default ({ imageFilePath, shortDescription, projectRoute }) => {
    const classes = cardStyles();
    const navigate = useNavigate();
    
        return (
        <Card className={classes.card} onClick={() => {
                // console.log(projectRoute)
                navigate(projectRoute)
            }}>
            <CardContent style={{padding: "0"}}>
                <Box className={classes.imageBox}>
                    <img src={imageFilePath} style={{maxHeight: "300px"}}/>
                </Box>
                <Box style={{padding: "15px", paddingTop:"15px"}}>
                    {shortDescription}
                </Box>
            </CardContent>
            <CardActions>
                <Button onClick={()=>{
                    navigate(projectRoute)
                }}>Learn More</Button>
            </CardActions>     
        </Card>
    );   
}