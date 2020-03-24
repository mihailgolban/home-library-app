import Home from "../pages/Home";
import Shelves from "../pages/Shelves";
import NoMatch from "../pages/NoMatch";
import BookDetails from "../pages/BookDetails";

const routes = [
    {
        path: ['/', '/home'],
        exact: true,
        component: Home
    },
    {
        path: '/shelves',
        exact: true,
        component: Shelves
    },
    {
        path: '/book',
        exact: true,
        component: BookDetails
    },
    {
        path: '*',
        exact: false,
        component: NoMatch
    }
];

export default routes;
