import { useState } from 'react';

function Form({ cards }) {
	const [searchString, setSearchString] = useState('');
	const [lastSearch, setLastSearch] = useState('');

	function handleChange(event) {
		setSearchString(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		findCard(searchString);
	}

	function findCard(searchString) {}

	return (
		<form onSubmit={handleSubmit} className='form-horizontal'>
			<input
				placeholder='Search'
				type='text'
				name='searchString'
				required
				onChange={handleChange}
				value={searchString}
			/>
			<button type='submit'>
				search.exe
				{/* <SearchIcon height='2rem' width='2rem' /> */}
			</button>
		</form>
	);
}

export default Form;
