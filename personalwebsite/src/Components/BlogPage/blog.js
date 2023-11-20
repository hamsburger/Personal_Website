import React from 'react'
import BlogArea from './blogArea'
import { Container, Box} from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles"
import ContentBackground from '../Basic/contentBackground'
import ContentWrapper from '../Basic/contentWrapper'
const blogStyles = makeStyles((theme) => ({
  leftPanel: {
    backgroundColor: "rgba(34, 139, 34, 0.9)",
    [theme.breakpoints.down("sm")] : {
      width: 0,
    },
    width: "25%"
  },
  rightPanel: {
    [theme.breakpoints.down("sm")] : {
      width: "100%",
    },
    width: "75%"
  }
}))

export default function Blog(){
  const classes = blogStyles()
  return <ContentBackground backgroundColor="green">
    <ContentWrapper paddingMobile={"0"}>
      <Box width="100%" style={{display: "flex", flexWrap: "wrap", minHeight: "100vh"}}>
        <Box className={classes.leftPanel}>
            <ContentWrapper opacity={0}>
            </ContentWrapper>
        </Box>
        <Box className={classes.rightPanel}>
            <ContentWrapper opacity={0.8} paddingMobile={"0"}>
              <BlogArea/>
            </ContentWrapper>
        </Box>
      </Box>
    </ContentWrapper>
  </ContentBackground>
}