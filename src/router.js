import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import index from './index';

const RouterService = () => {
    return(
        <Router>
            <Switch>
                <Route exact path="/" ></Route>
                <Route path="/product"></Route>
            </Switch>
        </Router>
    );
}
export default RouterService;