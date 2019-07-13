import React from 'react';
import { Switch , Route } from "react-router-dom";

import Home from './pages/Home'
import NovaFoto from './pages/NovaFoto'

function Routes () {
    return(
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/NovaFoto" component={NovaFoto} />
        </Switch>
    );
}

export default Routes