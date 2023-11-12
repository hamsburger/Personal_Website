import React from "react";
import Drawer from "@material-ui/core/Drawer";
import ToolBar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

/* Icons */
import InboxIcon from '@material-ui/icons/Inbox';
import NetworkCellIcon from '@material-ui/icons/NetworkCell';
import DraftsIcon from '@material-ui/icons/Drafts';
import HelpIcon from '@material-ui/icons/Help';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import { makeStyles } from "@material-ui/core/styles";

const menuStyles = makeStyles((theme) => ({
    fixedMenu: {
        position: "sticky",
        top: 0,
        ...theme.typography.body2
    }
}));
export default () => {
    const classes = menuStyles();
    return (<Paper elevation={0} className={classes.fixedMenu}>
        <List component="nav" aria-label="main mailbox folders">
        <ListItem button component="a" href="#BasicInfo">
          <ListItemIcon>
            <HelpIcon />
          </ListItemIcon>
          <ListItemText primary="1.1 Basic Info"/>
        </ListItem>
        <ListItem button component="a" href="#Projects">
          <ListItemIcon>
            <NetworkCellIcon />
          </ListItemIcon>
          <ListItemText primary="1.2 Projects"/>
        </ListItem>
        <ListItem button component="a" href="#Interests">
          <ListItemIcon>
            <WbIncandescentIcon />
          </ListItemIcon>
          <ListItemText primary="1.3 Interests"/>
        </ListItem>
        <ListItem button component="a" href="#ContactInfo">
        <ListItemIcon>
            <DirectionsRunIcon />
          </ListItemIcon>
          <ListItemText primary="1.4 Contact Info"/>
        </ListItem>
      </List>
      <Divider />
      <List component="nav" aria-label="secondary mailbox folders">
        <ListItem button component="a" href="#HomeBar">
          <ListItemText primary="Back to Top"/>
        </ListItem>
      </List>
    </Paper>);
};