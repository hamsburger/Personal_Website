import React from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";
const tableStyles = makeStyles((theme) => ({
    flexibleGrid: {
        display: "grid",
        [theme.breakpoints.down("xs")] : {
            gridTemplateRows: props => `repeat(${props.numColumns}, ${100/props.numColumns}%)`
        },
        [theme.breakpoints.up("sm")] : {
            gridTemplateColumns: props => `repeat(${props.numColumns}, ${100/props.numColumns}%)`,
            gridTemplateRows: props => `repeat(${props.numRows}, ${100/props.numRows}%)`,
        }
    }
}));

export default function Table({rows, columns, ...otherProps}){
    const classes = tableStyles({numRows: rows[0].length, numColumns: columns.length})
    // if (rows !== columns) throw Error(`Rows have ${rows} elements and Columns have ${columns} elements. They should have equal number of elements!`);
    return <Box className={classes.flexibleGrid} {...otherProps}>
        {
            columns.map((_, i) => {
                return <table style={{borderCollapse: "collapse"}}>
                    <Typography style={{border: "1px solid black", padding: "10px"}}><b>{columns[i]}</b></Typography>
                    {
                        rows[i].map((_, j) => {
                            return <Typography style={{border: "1px solid black", padding: "10px"}}>{rows[i][j]}</Typography>
                        })
                    }
                </table>
            })
        }
     </Box>
}