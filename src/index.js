import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import memoryUtils from "./utils";
import storageUtils from './utils/storageUtils';
import Router from './router';

const user=storageUtils.getUser();
memoryUtils.user=user;
ReactDOM.render(<App />, document.getElementById('app'));