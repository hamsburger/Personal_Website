import React from "react";
import PrettyArticleHeading from "../Basic/prettyArticleHeading";
import { Divider, Typography } from "@material-ui/core";
import ContentBackground from "../Basic/contentBackground";
import ContentWrapper from "../Basic/contentWrapper";
import { MusicSocials } from "../Basic/Socials/socialsList";

export default () => (
        <ContentBackground backgroundColor="rgba(227, 61, 148, 0.3)">
            <ContentWrapper>
                <PrettyArticleHeading>
                    Music
                </PrettyArticleHeading>
                <Divider></Divider>
                <Typography variant="h2">Website Design In Progress! In the meantime, check me out using my <b>Music Socials</b> down below</Typography>
                <ContentWrapper padding={"0px"} opacity={0.8} minHeight="auto">
                    <MusicSocials></MusicSocials>
                </ContentWrapper>
                <Divider/>
                <iframe style={{borderRadius:"12px", opacity: 0.7}} src="https://open.spotify.com/embed/artist/3HW8E8ZihfehFqkqxTayBE?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </ContentWrapper>   
        </ContentBackground>

)