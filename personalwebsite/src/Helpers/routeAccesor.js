import AppRoutes from "../Components/allRoutes";
export function routeAccessor(pathName) {
    if (pathName === "/") return AppRoutes
    else {
        let accessors = pathName.slice(1).split("/")
        let elem = AppRoutes;
        for (let accessor of accessors){
            elem = elem[accessor];
        }
        return elem
    }
}