import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CardList from './CardList';
import { contacts } from './contacts';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

ReactDOM.render(
	<App />
	,document.getElementById('root'));
registerServiceWorker();
