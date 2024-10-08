import { 
    ThemeProvider, 
    makeStyles, 
    createTheme, 
    useTheme
} from "@material-ui/core/styles";
import { React, createContext, useContext } from "react";

const CustomThemeContext = createContext(null);

export function CustomThemeProvider({ children }) {
    const defaultTheme = useTheme();
    const theme = createTheme({
        typography : {
          fontFamily: `futura-pt,Avenir,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Helvetica,Arial,sans-serif`,
          h1 : {
            ...defaultTheme.typography.h1,
            fontSize: "1.75rem",
            fontWeight: "500",
            letterSpacing: "7px", 
            fontFamily: "Raleway, sans-serif",
          },
          h2: {
            ...defaultTheme.typography.h2,
            fontSize: "1.5rem",
            fontWeight: "500",
            letterSpacing: "3px",
            fontFamily: "Raleway, sans-serif",
          },
          h3 : {
            ...defaultTheme.typography.h3,
            fontSize: "1.3rem",
            letterSpacing: "2px",
            fontWeight: "300",
            fontFamily: "Raleway, sans-serif",
          },
          h4 : {
            ...defaultTheme.typography.h4, 
            fontSize: "1.2rem"
          },
          h5 : {
            ...defaultTheme.typography.h5,
            fontSize: "1rem"
          },
          body1: {
            ...defaultTheme.typography.body1,
            fontWeight: defaultTheme.typography.fontWeightRegular,
            fontFamily: `futura-pt,Avenir,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Helvetica,Raleway,sans-serif`,
          },
          body2: {
            ...defaultTheme.typography.body2,
            fontWeight: defaultTheme.typography.fontWeightRegular,
            fontFamily: `futura-pt,Avenir,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Helvetica,Raleway,sans-serif`,
          },
          overline_pretty: {
            ...defaultTheme.typography.overline,
            fontWeight: "500",
            fontFamily: "Raleway,sans-serif",
          },
        },
        palette: {
          primary: {
            main: "rgba(30, 150, 225, 1)",
            background: "rgba(30, 111, 210, 1)"
          },
          
          secondary: {
            main: "rgba(224,232,243, 1)",
            opaque: "rgba(224,232,243, 0.7)"
          }, 

          D3: [
            '#636EFA', '#EF553B', '#00CC96', '#AB63FA', 
            '#FFA15A', '#19D3F3', '#FF6692', '#B6E880', 
            '#FF97FF', '#FECB52']

        },
        headSpacing: {
          marginTop: "30px"
        },
        overrides : {
          MuiAppBar : { 
          },
          
        },
      });

      return (
        <CustomThemeContext.Provider value={theme}>
            {children}
        </CustomThemeContext.Provider>
      )  
};

export function useCustomTheme(){
    return useContext(CustomThemeContext);
}