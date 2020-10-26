import React from 'react';
import logo from './logo.svg';
import AppBar from "@material-ui/core/Appbar";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import { ThemeProvider, makeStyles, createMuiTheme, useTheme} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from "react-router-dom";

import Main from "./Components/main";
import './App.css';

const layoutStyles = makeStyles((theme) => ({
  AppBar : {

  }, 
  ButtonGroup : {
    width: "100vw",
    flexWrap: "wrap",
    "& > *" : {
      width: "100%",
    }
  }
}));

/* How do I add a transition to media change? */
function App() {
  const defaultTheme = useTheme();
  const theme = createMuiTheme({
    typography : {
      fontFamily: `futura-pt,Avenir,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Helvetica,Arial,sans-serif`,
      body1: {
        ...defaultTheme.typography.body1,
        fontWeight: defaultTheme.typography.fontWeightRegular,
        fontFamily: `futura-pt,Avenir,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Helvetica,Arial,sans-serif`,
      },
      body2: {
        ...defaultTheme.typography.body2,
        fontWeight: defaultTheme.typography.fontWeightRegular,
        fontFamily: `futura-pt,Avenir,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Helvetica,Arial,sans-serif`,
      },
    },
    overrides : {
      MuiAppBar : { 
      }
    },
  });
  // const matches = useMediaQuery('(max-width:550px)');
  const classes = layoutStyles();
  return (
    <ThemeProvider theme={theme}>
    <Main/>
    </ThemeProvider>
  );
}

export default App;
