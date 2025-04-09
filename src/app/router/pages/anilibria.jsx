import {Anilibria} from "../../../pages/Anilibria/index.jsx";
import AnilibriaDetails from "../../../pages/Anilibria/AnilibiraDetails/index.jsx";

export default [
    {
        path: '/anilibria',
        element: <Anilibria />
    },
    {
        path: '/anilibria/:identifier',
        element: <AnilibriaDetails />
    }
]