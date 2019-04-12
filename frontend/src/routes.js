import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from '../src/pages/Main';
import Box from '../src/pages/Box';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/box/:id" component={Box} />
        </Switch>
    </BrowserRouter>
)

export default Routes;