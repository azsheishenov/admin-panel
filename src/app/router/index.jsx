import {createBrowserRouter} from "react-router-dom";
import Login from "../../pages/Login/index.jsx";
import DefaultLayout from "../layout/DefaultLayout.jsx";
import MainPage from "../../pages/MainPage/index.jsx";
import accessControl from "./pages/accessControl.jsx";
import anilibria from "./pages/anilibria.jsx";

const router = createBrowserRouter([
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/',
        element: <DefaultLayout/>,
        children: [
            {
                index: true,
                element: <MainPage/>
            },
            ...accessControl,
            ...anilibria,
        ]
    }
])

export default router;