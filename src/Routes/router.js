import Signup from "../page/Auth/Signup";
import PrivatePage from "../page/Private/PrivatePage";

const { createBrowserRouter } = require("react-router-dom");
const { default: App } = require("../App");
const { default: Login } = require("../page/Auth/Login");
const { default: Dashboard } = require("../page/Dashboard/Dashboard");

export const routerPath = createBrowserRouter([
    {
        path: '/', element: <App></App>, children:[
            {
                path:'/', element: <PrivatePage><Dashboard></Dashboard></PrivatePage>
            },
            {
                path:'/login', element: <Login></Login>
            },
            {
                path:'/signup', element: <Signup></Signup>
            },
        ]
    },
])