import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { contacts } from './contacts';

const App = () => {
	return (
		<div>
			<h1>Twitter Friends</h1>
			<SearchBox />
			<CardList contacts={contacts}/>
		</div>
	)
}

export default App;