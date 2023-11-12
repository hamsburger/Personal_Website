export function dictAccessor(pathName, dict) {
    if (pathName === "/") return dict
    else {
        let accessors = pathName.slice(1).split("/")
        let elem = dict;
        for (let accessor of accessors){
            elem = elem[accessor];
        }
        return elem
    }
}