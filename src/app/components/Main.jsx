import React from 'react';
import {Provider} from 'react-redux';
import {store} from '../store';
import {Route, Router} from 'react-router-dom';
import {history} from '../store/history';
import {Dashboard, ConnectedDashboard} from './Dashboard';
import {ConnectedNavigation} from './Navigation';

export const Main = () =>(
    <Router history={history}>
<Provider store={store}>
<div>
    <ConnectedNavigation/>
    <Route exact path="/dashboard" render={()=>(<ConnectedDashboard/>)}>
    
    </Route>
</div>
</Provider>
</Router>
)