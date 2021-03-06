import {AdminRole} from "../../../../store/reducers/Account.reducer";
import {Route} from "../../../../utils/Route";
import Dashboard from "./Dashboard";

export default (): Route => {
    return {
        name: "Dashboard",
        icon: "",
        auth: AdminRole.SuperAdmin,
        children: [
            {
                name: "",
                icon: "",
                path: "/",
                component: Dashboard
            }
        ]
    }
}
