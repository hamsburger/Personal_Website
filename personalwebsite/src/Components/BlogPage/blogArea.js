// App.js
import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  Box,
  MenuItem
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import SearchResults from "./blogResults";
import { propsDict } from "../../DataModels/models";
import { dictAccessor } from "../../Helpers/dictAccesor";
import { Autocomplete } from "@material-ui/lab";
import RouteGenerator from "../Basic/RouteGenerator";
const blogStyles = makeStyles((theme) => ({
  tagSearch : {
    [theme.breakpoints.up("sm")] : {
      "width" : "50%"
    },
    [theme.breakpoints.down("xs")] : {
      "width" : "100%"
    }
  },
  searchAdjustments: {
    display: "flex",
    [theme.breakpoints.up("sm")] : {
      flexDirection: "row"
    },
    [theme.breakpoints.down("xs")] : {
      flexDirection: "column"
    },
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    // gap: "10px 20px",
  },
  flexButtonAdjustments: { 
  }
}))
const BlogArea = () => {
  // const data = [
  //   { title: "Item 1", tags: ["tag1", "tag2"] },
  //   { title: "Item 2", tags: ["tag2", "tag3"] }
  //   // Add more data as needed
// ];
  let desiredPath = "/blog"
  let pages = (dictAccessor(desiredPath, propsDict))
  let allPages = (
    []
    // Object.entries(pages).filter(elem => new Date(elem[1]["props"]["date"]).getTime() < Date.now()) 
  ) // Release pages have dates authored before now
  // console.log(allPages)
  let allResults = allPages.map(elem => ({
                                    ...elem[1]["props"],
                                    navLink : elem[0]
                                }))
  let routeDict = {}
  allPages.forEach(elem => {
    routeDict[elem[0]] = elem[1]["props"]["page"]  
  })
  // console.log("All Pages", allPages)
  // console.log("All Results", allResults)
  // console.log("Route Dict", routeDict)
  const classes = blogStyles();
  const [searchQuery, setSearchQuery] = useState("");
  const [filterTag, setFilterTag] = useState("All");
  const [searchResults, setSearchResults] = useState(allResults);
  const theme = useTheme();

  const tagFlatProps = {
    options: ["All"].concat(allResults.map(elem => elem.tags).flat())
  }
  const titleFlatProps = {
    options: allResults.map(elem => elem.title)
  }

  const handleSearch = (searchQuery, filterTag) => {
    console.log("searchQuery", searchQuery)
    console.log("filterTag", filterTag)
    // Filter allResults based on search query and filter tag
    const filteredResults = allResults.filter(
      (item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (item.tags.includes(filterTag) || filterTag === "All")
    );

    // Sort allResults based on the match with the search query
    const sortedResults = filteredResults.sort((a, b) => {
      const aScore =
        a.title.toLowerCase().includes(searchQuery.toLowerCase()) +
        a.tags.includes(filterTag);
      const bScore =
        b.title.toLowerCase().includes(searchQuery.toLowerCase()) +
        b.tags.includes(filterTag);

      return bScore - aScore;
    });

    setSearchResults(sortedResults);
  };

  const handleTagChange = (event) => {
    setFilterTag(event.target.value);
    handleSearch(searchQuery, event.target.value)
  };
//   return <>hi</>
console.log(theme.breakpoints.up("sm"))
  return (
    <Container>
      <Typography variant="h1" gutterBottom>
        Blog (Let Me Cook)
      </Typography>
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "10px 20px",
        }}
      >
        <TextField
        label="Search"
        variant="outlined"
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value)
          handleSearch(e.target.value, filterTag)
        }}
        style={{flexGrow: 7}}
      />
        
        
        <Button
          className={classes.flexButtonAdjustments}
          style={{
            flexGrow: 3,
            height: "46px",
          }}
          variant="contained"
          onClick={(e) => { handleSearch(searchQuery, filterTag)}}
        >
          Search
        </Button>
      </Box>
      <FormControl className={classes.tagSearch}>
        <InputLabel id="tag-filter-label" style={{ position : "relative", marginBottom: "10px"}}>Filter by Tag</InputLabel>
        <Autocomplete
          {...tagFlatProps}
          disableCloseOnSelect
          renderInput={(params) => (
            <TextField {...params}  margin="normal" />
          )}
        />
        {/* <Select
          labelId="tag-filter-label"
          id="tag-filter-select"
          value={filterTag}
          onChange={handleTagChange}
          style={{ width: "100%" }}
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="tag1">Tag 1</MenuItem>
          <MenuItem value="tag2">Tag 2</MenuItem>
          <MenuItem value="tag3">Tag 3</MenuItem>
          Add more tags as needed
        </Select> */}
      </FormControl>
      <SearchResults results={searchResults} />
    </Container>
  );
};

export default BlogArea;
