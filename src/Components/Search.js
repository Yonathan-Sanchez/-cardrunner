import { useNavigate } from 'react-router-dom';
// import cardrunner from 'src/cardrunner.svg';

function Search({ searchString, setSearchString, cards, setFoundCard }) {
	// const [lastSearch, setLastSearch] = useState('');
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
		if (res == undefined) {
			return console.log('card not found');
		} else {
			setFoundCard(res);
			navigate(`/searchResults/${searchString}`);
			setSearchString('');
			// } else {
			// 	return <div>card not found.</div>
		}
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
				>{/* <img src={cardrunner} />{' '} */}
				{/* <SearchIcon height='2rem' width='2rem' /> */}
			</button>
		</form>
	);
}

export default Search;
