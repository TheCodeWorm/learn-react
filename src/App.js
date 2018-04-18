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

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value });
	}

	render() {
		const filteredContacts = this.state.contacts.filter(contacts => {
			return contacts.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		return (
			<div className='tc'>
				<h1>Robofriends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<CardList contacts={filteredContacts}/>
			</div>
		)
	}
}

export default App;