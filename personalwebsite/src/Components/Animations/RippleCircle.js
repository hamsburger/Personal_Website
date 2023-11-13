import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const animationStyles = makeStyles((theme) => ({
  boxRipple: {
    position: "fixed",
    height: "90vh",
    width: "100vw",
  },

  box: {
    /* animation: bouncyBox 3s ease-out; */
    position: "absolute",
    zIndex: 2,
  },

  rippleCircle: {
    position: "absolute",
    zIndex: 1
  },

  rippleCircleOne: {
    opacity: 0,
    animation: (props) => `firstRipple ${props.delay}s ease-out 1s infinite`
  },

  rippleCircleTwo: {
    opacity: 0,
    animation: (props) => `secondRipple ${props.delay}s ease-out 1s infinite`
  },

  "@global": {
    "@keyframes secondRipple": {
      "0%,40%": {
        opacity: 0
      },
      "40%": {
        opacity: 1
      },
      "60%": {
        opacity: 0
      },
      "100%": {
        r: "325px"
      }
    },
    "@keyframes firstRipple": {
      "0%,10%": {
        opacity: 0
      },
      "10%": {
        opacity: 1
      },
      "40%": {
        opacity: 0
      },
      "100%": {
        r: "250px"
      }
    },
    "@keyframes expandCircle": {
      "0%": {
        r: 0
      },

      "22%": {
        r: "175px"
      },

      "40%": {
        r: 0
      },

      "100%": {

        fill: "white"
      }
      /* background: rgba(211, 211, 211, 0.3); */
    }
  }
}));
export default function RippleCircle(props) {
  let { strokeColor, x, y, delay } = props;
  const classes = animationStyles(props);
  return (
    <React.Fragment>
      <svg className={classes.boxRipple}>
        <circle
          className={clsx(classes.rippleCircleOne, classes.rippleCircle)}
          cx={x}
          cy={y}
          r={"10vw"}
          fill={"transparent"}
          strokeWidth={2}
          stroke={strokeColor}
          strokeOpacity={0.5}
        ></circle>
        <circle
          className={clsx(classes.rippleCircleTwo, classes.rippleCircle)}
          cx={x}
          cy={y}
          r={"10vw"}
          fill={"transparent"}
          strokeWidth={1}
          stroke={strokeColor}
          strokeOpacity={0.5}
        ></circle>
        <circle
          className={classes.box}
          cx={x}
          cy={y}
          r={"0vw"}
          fill={strokeColor}
        ></circle>
      </svg>
    </React.Fragment>
  );
}
