import { useNavigate } from 'react-router-dom';

function Search({ searchString, setSearchString, cards, setFoundCard }) {
	const navigate = useNavigate();

	let res = '';
	function findCard() {
		res = cards.find((card) => card.title == searchString);
	}

	function handleChange(event) {
		event.preventDefault();
		setSearchString(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		findCard();
		setFoundCard(res);
		navigate(`/searchResults/${searchString}`);
		setSearchString('');
	}

	return (
		<form onSubmit={handleSubmit} className='form-horizontal'>
			<label htmlFor='card search' aria-label='search by card name'></label>
			<input
				placeholder='(card.name)'
				type='text'
				name='searchString'
				required
				onChange={handleChange}
				value={searchString}
			/>
			<button type='submit' value={'Submit'}>
				>
			</button>
		</form>
	);
}

export default Search;
