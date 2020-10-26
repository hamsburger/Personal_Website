import React, {useMemo, useState, useEffect} from "react";
import Banner from "./banner";
import initData from "./bannerTitles";
import Menu from "./menu";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const gridStyles = makeStyles((theme) => ({
  gridContainer : {
    display: "flex",
    position: "sticky",
    top: 0,
    flexWrap: "nowrap",
    justifyContent: "start",
    width: "100vw",
    boxShadow: "-5px -15px 15px -15px rgba(0,0,0,0.8)",
    marginBottom: "10px",
    zIndex: 2,
    // borderTop: "2px solid rgba(0,0,0,0.6)",
  },

  menuContainer : {
    width: "20vw",
    marginRight: "3vw",
    marginLeft: "3vw",
    [theme.breakpoints.down("sm")]:{
      width: "0vw",
      margin: "0px",
      visibility: "hidden",
    },
  },

  contentContainer : {
    width: "70vw",
    margin: "0px",
    [theme.breakpoints.down("sm")]:{
      width: "100vw", 
    },
  },

  

}));
const Grid = () => {
    const [data, setData] = useState(initData);
    const classes = gridStyles();
    const postBanners = useMemo(() => {
      let arr = data.map(post => {
        return <Banner key={post.id} title={post.title} seconds={post.seconds} />
      });
      return arr;
    }, []);
    useEffect(() => {
      setTimeout(() => {
        setData(data => data.map(obj => ({
          ...obj,
          "seconds" : 0.5,
        })));
      }, data.slice(-1)[0].seconds * 1000);
    }, [data]);

    return (
      <React.Fragment>
      <div className={classes.gridContainer}>
        <div className={classes.menuContainer}><Menu/></div>
        <div className={classes.contentContainer}>{postBanners}</div>
      </div>
      </React.Fragment>
    );
};

export default Grid;