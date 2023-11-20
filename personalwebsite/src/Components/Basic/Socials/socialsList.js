import { Box, List, ListSubheader, SvgIcon } from "@material-ui/core";
import {ReactComponent as Musescore} from "../../Art/Icons/icons8-musescore.svg";
import {ReactComponent as Spotify} from "../../Art/Icons/icons8-spotify.svg";
import { Send as SendIcon, LinkedIn, GitHub, YouTube, MusicNote, ExpandLess, ExpandMore, Mail } from "@material-ui/icons";
import SocialsItem from "./socialsItem";
export default function SocialsList(){
    return (<Box style={
        {
          position: "fixed",
          padding: "10px", 
          right: "0px", 
          width: "200px",
          background: "rgba(255, 255, 255, 0.95)",
        //  color: "white",
        //  borderRadius: "10px",
        //  background: "rgba(0, 0, 0, 0.6)", 
         zIndex: 1
        }}>
          <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              List of Socials
            </ListSubheader>
          }
          >
            <WorkSocials/>
          </List>
          <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Music Socials
            </ListSubheader>
          }
          >
            <MusicSocials/>
          </List>
          <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Mail
            </ListSubheader>
          }
          >
            <ContactSocials/>
          </List>
    </Box>)
}

export function MusicSocials(){
    return <>
      <SocialsItem title={"Spotify"} Icon={<SvgIcon component={Spotify} viewBox="0 0 48 48"/>} 
      link="https://open.spotify.com/artist/3HW8E8ZihfehFqkqxTayBE?si=OVH3JrshQt6MWSSSPLRmFw"/>
      <SocialsItem title={"YouTube"} Icon={<YouTube/>} 
      link="https://www.youtube.com/channel/UC1oUn-I2zU58H2jxy1cucXw"/>
      <SocialsItem title={"MuseScore"} Icon={<SvgIcon component={Musescore} viewBox="0 0 32 32"/>} 
      link="https://musescore.com/harriszheng"/>
    </>
}


export function WorkSocials(){
  return <>
    <SocialsItem title={"LinkedIn"} Icon={<LinkedIn/>} link="https://www.linkedin.com/in/harriszheng/"/>
    <SocialsItem title={"GitHub"} Icon={<GitHub/>} link="https://github.com/hamsburger"/>
  </>

}

export function ContactSocials({title, width="100%"}){
  return <>
    <SocialsItem width={width} title={(title) || "Email"} Icon={<Mail/>} link="mailto:harriszheng222@gmail.com"/>
  </>
}