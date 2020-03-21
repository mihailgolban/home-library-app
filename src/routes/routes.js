import Home from "../pages/Home";
import Shelves from "../pages/Shelves";
import NoMatch from "../pages/NoMatch";

const routes = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/home',
        exact: true,
        component: Home
    },
    {
        path: '/shelves',
        exact: true,
        component: Shelves
    },
    {
        path: '*',
        exact: false,
        component: NoMatch
    }
];

export default routes;
