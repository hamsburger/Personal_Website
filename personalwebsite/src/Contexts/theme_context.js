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
            fontSize: "3rem",
            fontWeight: "100",
            fontFamily: "Raleway",
          },
          h2: {
            ...defaultTheme.typography.h2,
            fontSize: "2rem",
            fontWeight: "100",
            fontFamily: "Raleway",
          },
          h3 : {
            ...defaultTheme.typography.h3,
            fontSize: "1.75rem",
            fontWeight: "100",
            fontFamily: "Raleway",
          },
          h4 : {
            ...defaultTheme.typography.h4, 
            fontSize: "1.4rem"
          },
          h5 : {
            ...defaultTheme.typography.h5,
            fontSize: "1.32rem"
          },
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
          overline_pretty: {
            ...defaultTheme.typography.overline,
            fontWeight: "100",
            fontFamily: "Raleway",
          }
        },
        palette: {
          primary: {
            main: "rgb(211,227,240)"
          },
          
          secondary: {
            main: "rgba(224,232,243, 1)",
            opaque: "rgba(224,232,243, 0.8)"
          }, 
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