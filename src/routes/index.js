import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import routes from "./routes";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                {routes.map(route => <Route {...route}/>)}
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
