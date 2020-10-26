import React, {useState, useRef, useEffect,  useMemo, useLayoutEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import TempContent from "./bannerContent";
const bannerStyles = makeStyles((theme)=>({
    arrow : {
        cursor: "pointer",
        zIndex: 2,
    },
    contentLayout : {
      // positioning
      position: "relative",
      background: "rgba(211, 211, 211, 0.2)",
      width: props => { return (props.contentView) ? "100%" : 0}, 
      height: props => { console.log(props); return (props.contentView) ? "100%" : 0 },
      "& > div" : {
        paddingLeft: "0px",
        marginBottom: "5px",
        opacity: props => props.contentView ? 1 : 0,
      },
      // Spacing parameters
      lineHeight: "30px",
      padding: props => (props.contentView) ? "10px" : 0,
      // display: props => props.contentView ? "block" : "none",
      transition: props => (props.contentView) ? "width 0.5s" : "height 0s",
    },
    postHeader : {
      // font settings
      ...theme.typography.overline,
      fontFamily: "Raleway",
      fontWeight: "100",
      fontSize: "30px",
      letterSpacing: "4px",

      display: "flex",
      flex: 1,
      paddingLeft: "20px",
      
      // Space out banner elements
      "& *:nth-child(1)" : {
        flex: 30,
      },
      "& *:nth-child(2)" : {
        flex: 1,
      },
      
      // Space out banners responsively.
      [theme.breakpoints.down("sm")] : {
        "& *:nth-child(1)" : {
          flex: 10,
        },
        "& *:nth-child(2)" : {
          flex: 1,
        }
      }
    },
    postContainer : {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      width: "100%",
      margin: "0px",
  
      // Animation Properties
      opacity: "0",
      top: "-50px",
      animation: props => {  console.log(props); return `fadeIn ${props.seconds}s linear forwards` },
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
    const [canView, setCanView] = useState(false);
    const [arrow, setArrow] = useState("\u25C0");
    const [contentView, setContentView] = useState(false); 
    const classes = bannerStyles({...props, contentView: contentView});
    const e1 = useRef(null);
    useLayoutEffect(() => {
      window.addEventListener("scroll", isInView);
      window.addEventListener("load", isInView);
      window.addEventListener("resize", isInView);
  
      return () => { 
        window.removeEventListener("load", isInView);
        window.removeEventListener("scroll", isInView); 
        window.removeEventListener("resize", isInView);
      };
    }, []);
  
    const isInView = () => {
      const rectangle = e1.current.getBoundingClientRect();
      let {top, height} = rectangle;
    //   console.log(e1.current.getBoundingClientRect());
    //   console.log(window.innerHeight);
      setCanView(top <= window.innerHeight);
    }
  
    const toggleButton = (e) => {
      let newInnerHTML =  (e.target.innerHTML === "\u25BC") ? "\u25C0" : "\u25BC";
      setArrow(newInnerHTML);
      setContentView(!contentView);
    }
  
    const { id, title, seconds } = props;
    return (<div id={title} className={(canView) ? classes.postContainer : "post"} ref={e1}>
      { (canView) && <div className={classes.postHeader}>
          <div>{title}</div>
          <div onClick={toggleButton} className={classes.arrow}>{arrow}</div>
        </div> }
        { (canView) && <div className={classes.contentLayout}>
          <TempContent title={title}/>
            </div>     }
    </div>);
  };

  export default Banner;
  
  
