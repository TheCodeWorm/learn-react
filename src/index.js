import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

/*
function formatName(user) {
	if (user) {
		return user.firstName + ' ' + user.lastName;
	}
};

const user = [{
	firstName: 'Olive',
	lastName: 'Bootlid'
}, 
{
    firstName: 'Noel',
    lastName: 'Caceres'
}];

const element1 = <h1>Hello, {formatName(user[0])}!</h1>

ReactDOM.render(
	element1,
	document.getElementById('root')
);
*/

function tick() {
  const element = (
    <div>
      <h1>Hi Honey!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
      <h2>You are late for work! ;)</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);

/*
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
*/
