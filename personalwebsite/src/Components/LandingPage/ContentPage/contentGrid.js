import React, {useMemo, useState, useEffect} from "react";
import Banner from "./banner";
import initBanners from "./bannerTitles";
import Menu from "./menu";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const gridStyles = makeStyles((theme) => ({
  // gridContainer : {
  //   position: "sticky",
  //   top: 0,
  //   display: "flex",
  //   flexWrap: "nowrap",
  //   justifyContent: "center",
  //   width: "100vw",
  //   borderRadius: "0px",
  //   boxShadow: "0px -5px 10px -6px rgba(0,0,0,0.8)",
  //   // marginLeft: "60px",
  //   // marginRight: "60px",
  //   marginBottom: "100px"
  //   // borderTop: "2px solid rgba(0,0,0,0.6)",
  // },

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
    width: "100vw",
    margin: "0px",
  },

}));
const Grid = () => {
    const [banners, setBanners] = useState(initBanners);
    const classes = gridStyles();
    const postBanners = useMemo(() => {
      let arr = banners.map((post, index) => {
        return <Banner key={index} {...post} />
      });
      return arr;
    }, []);


    return (
      <React.Fragment>
        {/* <div className={classes.gridContainer}> */}
          <div className={classes.contentContainer}>{postBanners}</div>
          {/* <div className={classes.menuContainer}><Menu/></div> */}        
        {/* </div> */}
      </React.Fragment>
    );
};

export default Grid;