import Signup from "../page/Auth/Signup";

const { createBrowserRouter } = require("react-router-dom");
const { default: App } = require("../App");
const { default: Login } = require("../page/Auth/Login");
const { default: Dashboard } = require("../page/Dashboard/Dashboard");

export const routerPath = createBrowserRouter([
    {
        path: '/', element: <App></App>, children:[
            {
                path:'/', element: <Dashboard></Dashboard>
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