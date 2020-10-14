import React from 'react';

import { Route, BrowserRouter as Router, Switch, BrowserRouter } from 'react-router-dom'
import Hub from './pages/Hub';
import PageLogin from './pages/Login';

export class MyRouter extends React.Component<any, any>{

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={PageLogin} />
                    <Route exact path="/hub" component={Hub} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default MyRouter;