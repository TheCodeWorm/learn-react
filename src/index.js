import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const element1 = <h1>Hello, world!</h1>

ReactDOM.render(
	element1,
	document.getElementById('root')
);

/*
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
*/
