import { makeStyles } from "@material-ui/core"
const linkStyles = makeStyles((theme) => ({
    surveyLinks: {
        display: "flex",
        [theme.breakpoints.up("sm")] : {
            flexDirection: "row",
            "& *" : {
                paddingTop: "0px"
            }
        },
        [theme.breakpoints.down("xs")] : {
            flexDirection: "column",
            paddingTop: "8px",
        },

    }
}))

export default linkStyles