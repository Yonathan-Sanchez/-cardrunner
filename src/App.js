import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Sidebar from './Components/Sidebar.js';
import Main from './Components/Main.js';
import SearchResults from './Components/SearchResults.js';
import Results from './Components/Results.js';
import './CSS/App.css';

function App() {
	const [cards, setCards] = useState([]);
	const [loading, setLoading] = useState(true);
	const [searchString, setSearchString] = useState('');
	const [foundCard, setFoundCard] = useState({});

	function getCards() {
		const url = `https://netrunnerdb.com/api/2.0/public/cards`;
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				setCards(res.data.filter((card) => card.pack_code === 'core'));
				setLoading(false);
			})
			.catch(console.error);
	}

	useEffect(() => {
		getCards();
	}, [loading]);

	return (
		<div className='App'>
			<header className='App-header'>
				<h1 className='title'>
					<Link to='/'> {'>'} c a r d r u n n e r</Link>
				</h1>
			</header>
			<Sidebar
				cards={cards}
				searchString={searchString}
				setSearchString={setSearchString}
				setFoundCard={setFoundCard}
			/>
			<main className='main cardList'>
				<Routes>
					<Route
						path='/'
						element={<Main cards={cards} setCards={setCards} />}
					/>
					<Route path='/Results/:params' element={<Results cards={cards} />} />
					<Route
						path='/SearchResults/:cardName'
						element={
							<SearchResults
								cards={cards}
								searchString={searchString}
								foundCard={foundCard}
							/>
						}
					/>
				</Routes>
			</main>
		</div>
	);
}

export default App;
