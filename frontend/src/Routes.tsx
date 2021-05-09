import React from 'react'
import { Route } from 'react-router-dom'
import { Switch } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import Home from "pages/Home"
import Dashboard from "pages/Dashboard"

function Routes() {
    return (
        <BrowserRouter>
            <Switch>

                <Route path="/" exact>
                    <Home />
                </Route>

                <Route path="/dashboard" exact>
                    <Dashboard />
                </Route>

            </Switch>
        </BrowserRouter>
    );
}

export default Routes;