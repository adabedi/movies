import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Footer } from './components';
import * as serviceWorker from './serviceWorker';

ReactDOM.render([<App key="1" />, <Footer key="2" />], document.getElementById('root'));

serviceWorker.unregister();
