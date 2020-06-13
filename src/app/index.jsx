//console.log("Muhammad Noman App");
//console.log(store.getState());

import {store} from './store';
import React from 'react';

import ReactDom from 'react-dom';

import {Main} from './components/Main';

ReactDom.render(
    <Main />,
        document.getElementById("app")
);