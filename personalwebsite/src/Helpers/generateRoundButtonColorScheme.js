import seed from "./random_sequences";
import { useTheme } from "@material-ui/core";
import { propsDict } from "../DataModels/models";

function collectProps(dict, key){
    if (key == "props"){
        return dict["tags"]
    }  

    let tag_set = 
    Object.keys(dict).reduce((p, c) =>
    {
        let tag_array = collectProps(dict[c], c)
        tag_array.forEach((tag) => {
            p.add(tag)
        })
        return p
    }, new Set())

    // List of all tags
    return Array.from(tag_set)
}

// Generate a seeded color-scheme for every tag
function generateGlobalButtonColorScheme(theme){
    let seeder = seed(42);

    let all_tags = collectProps(propsDict, NaN)
    console.log(all_tags)
    let D3 = theme["palette"]["D3"];
    return Object.assign({}, ...all_tags.map((tag) => {
        let seed_result = seeder(D3.length)
        console.log(D3[seed_result])
        return { [tag] : D3[seed_result]}
    }))
}

export default generateGlobalButtonColorScheme;