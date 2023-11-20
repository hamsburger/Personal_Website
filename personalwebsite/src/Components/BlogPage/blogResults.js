// SearchResults.js
import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";
const blogResultStyles = makeStyles((theme) => ({
  listItem : {
    background: "transparent",
    transition: "all 0.3s",
    borderRadius: "5px",
    flexWrap: "wrap",
    "&:hover" : {
      background: "rgba(144, 144, 144, 0.1)"
    }
  }
}))
var options = { year: 'numeric', month: 'long', day: 'numeric' };
const BlogResults = ({ results }) => {
  const classes = blogResultStyles();
  console.log("Results:", results)
  const navigate = useNavigate()
  return (
    <div>
      <h2>Search Results</h2>
      {results.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <List>
          {results.map((result, index) => {
            let date = new Date(result.date)
            return (
              <ListItem className={classes.listItem} key={index} onClick={() => {
                navigate(result.navLink)
              }}
              >
                <ListItemText
                  style={{cursor: "pointer"}}
                  primary={result.title}
                  secondary={`Tags: ${result.tags.join(", ")}`}
                />
                {date.toLocaleDateString("en-US", options)}
              </ListItem>
            )
          })
        }
        </List>
      )}
    </div>
  );
};

export default BlogResults;
