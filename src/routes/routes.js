import Home from "../pages/Home";
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
        path: '*',
        exact: false,
        component: NoMatch
    }
];

export default routes;
