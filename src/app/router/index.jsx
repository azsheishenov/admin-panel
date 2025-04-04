import { createBrowserRouter } from "react-router-dom";
import Login from "../../pages/Login";
import MainPage from "../../pages/MainPage";
import DefaultLayout from "../../layout/DefaultLayout";
import accessControl from "./pages/accessControl";
import anilibria from "./pages/anilibria.jsx";

const router = createBrowserRouter([
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/',
        element: <DefaultLayout />,
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