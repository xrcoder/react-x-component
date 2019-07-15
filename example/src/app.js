import './style/index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router';

import History from './history';
import Pages from './pages';


ReactDOM.render(
    <Router history={History}>
        <Pages/>
    </Router>, document.getElementById('react-x-component')
);

if (module.hot) {
    module.hot.accept()
}