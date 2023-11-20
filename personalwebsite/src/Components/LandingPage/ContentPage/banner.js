import React, {useState, useRef, useEffect,  useMemo, useLayoutEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import BannerContent from "./bannerContent";
import { Typography } from "@material-ui/core";

const bannerStyles = makeStyles((theme)=>({
    arrow : {
        cursor: "pointer",
        zIndex: 2,
    },

    postHeader : {
      // font settings
      background: "rgba(210,230,250, 1)",
    },

    postHeaderText: {
      color:"rgba(0,0,0,0.7)",
      padding: "20px",
      [theme.breakpoints.up("sm")] : {
        paddingLeft: "15px",
      },
      [theme.breakpoints.down("xs")] : {
        paddingLeft: "15px"
      }
    },
    postContainer : {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      width: "100%",
      margin: "0px",
      marginTop: props => (props.id === 1) ? "0px" : "40px",
      // Animation Properties
      opacity: "0",
      top: "-50px",
      animation: props => {  return `fadeIn ${props.seconds}s linear forwards` },
      animationIterationCount: 1,
      // "& > div" : {
      //   display: "inline-block",
      // 
    },
  
    "@keyframes fadeIn" : {
      to : {
        opacity: 1,
        top: "0px",
      }
    },
  }));
const Banner = (props) => { 
    const [canView, setCanView] = useState(true);
    const [arrow, setArrow] = useState("\u25BC");
    const [contentView, setContentView] = useState(true); 
    const classes = bannerStyles({...props, contentView: contentView});
    const e1 = useRef(null);
    useLayoutEffect(() => {
      window.addEventListener("scroll", isInView);
      window.addEventListener("load", isInView);
      window.addEventListener("resize", isInView);
      window.addEventListener("click", isInView);
  
      return () => { 
        window.removeEventListener("load", isInView);
        window.removeEventListener("scroll", isInView); 
        window.removeEventListener("resize", isInView);
        window.removeEventListener("click", isInView);
      };
      setCanView(true)
    }, []);

    const isInView = () => {
      const rectangle = e1.current.getBoundingClientRect();
      let {top, height} = rectangle;

      // 'top' is element's displacement from top of viewport
      setCanView(top <= window.innerHeight);
    }
  
    // const toggleButton = (e) => {
    //   let newInnerHTML =  (e.target.innerHTML === "\u25BC") ? "\u25C0" : "\u25BC";
    //   setArrow(newInnerHTML);
    //   setContentView(!contentView);
    // }
  
    const { id, title, seconds } = props;
    return (
      <div id={title} className={(canView) ? classes.postContainer : "post"} ref={e1}>
        { 
          (canView)
          && 
          (
            <>
            <div className={classes.postHeader}>
              <Typography variant="h1" className={classes.postHeaderText}>{title}</Typography>
            </div> 
            <BannerContent title={title}/>     
            </>
          )
        } 
      </div>
    );
  };

  export default Banner;
  
  
