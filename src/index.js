import React from 'react';
import ReactDOM from 'react-dom';
import MyRouter from './MyRouter.jsx';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MyRouter />, document.getElementById('root'));
registerServiceWorker();
