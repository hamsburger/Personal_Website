import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core"
export default function SocialsItem({
    Icon, title, link, width="100%", style={}
}){
    return (
        <ListItem button onClick={() => window.open(link, '_blank')}
            style={{width: width, ...style}}>
            <ListItemIcon>
                {Icon}
            </ListItemIcon>
            <ListItemText primary={title} />
        </ListItem>
    )
}