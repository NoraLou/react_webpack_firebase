var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var routes = require('./config/routes');

import {browserHistory} from 'react-router';

ReactDOM.render(
    <Router history={browserHistory}>{routes}</Router>,
    document.getElementById('app')
)

