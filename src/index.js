import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navrouter from './router';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<Navrouter />, document.getElementById('root'));
registerServiceWorker();
