import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Hub from './pages/Hub';
import PageLogin from './pages/Login';
import MyRouter from './router';

ReactDOM.render(
    <MyRouter></MyRouter>,
    document.getElementById('root')
);
