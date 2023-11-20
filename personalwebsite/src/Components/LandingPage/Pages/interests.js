import { Typography } from "@material-ui/core";
import React from "react";
import ContentWrapper from "../../Basic/contentWrapper";
import { Link } from "react-router-dom";


export default () => (
    <ContentWrapper opacity={1}>
        <Typography variant="h2">Check out my <Link to="/blog">Blog page</Link> to read about my interests</Typography>
        <br/>
        Allow me to take you through a world of Data Analysis, APIs, Music and much more!
    </ContentWrapper>
)