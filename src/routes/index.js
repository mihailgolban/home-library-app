import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import routes from "./routes";
import PageLayout from "../layouts/PageLayout";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                {routes.map(route => {
                    const {component: Component, ...rest} = route;
                    return <Route key={route.path}
                                  {...rest}
                                  render={routeProps => (
                                      <PageLayout>
                                          <Component {...routeProps}/>
                                      </PageLayout>
                                  )}
                    />
                })}
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
