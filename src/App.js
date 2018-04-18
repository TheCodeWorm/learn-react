import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { contacts } from './contacts';

class App extends Component {
	constructor() {
		super();
		this.state = {
			contacts: contacts,
			searchfield: ''
		};
	}
	render() {
		return (
			<div className='tc'>
				<h1>Twitter Friends</h1>
				<SearchBox />
				<CardList contacts={contacts}/>
			</div>
		)
	}
}

export default App;