import React from 'react';
import logo from './logo.svg';           
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import { useCustomTheme, CustomThemeProvider }  from "./Contexts/theme_context";
import { ThemeProvider, makeStyles, createTheme, useTheme} from "@material-ui/core/styles";
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
  ButtonGroup : {
    width: "100vw",
    flexWrap: "wrap",
    "& > *" : {
      width: "100%",
    }
  }
}));

const MyContext = () => (
    <CustomThemeProvider>
        <App/>
    </CustomThemeProvider>
);

/* How do I add a transition to media change? */
function App() {
  const theme = useCustomTheme();
  // const matches = useMediaQuery('(max-width:550px)');
  const classes = layoutStyles();
  return (
    <ThemeProvider theme={theme}>
      <Main/>
    </ThemeProvider>
  );
}

export default MyContext;
