import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Sidebar from './Components/Sidebar.js';
import Details from './Components/Details.js';
import Main from './Pages/Main.js';
import Core from './Components/Core.js';
import SideCodeResults from './Components/SideCodeResults.js';
import FactionCodeResults from './Components/FactionCodeResults.js';
import TypeCodeResults from './Components/TypeCodeResults.js';
import './CSS/App.css';

function App() {
	const [cards, setCards] = useState([]);
	const [loading, setLoading] = useState(true);

	function getCardData() {
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
		getCardData();
	}, [loading]);

	return (
		<div className='App'>
			<header className='App-header'>
				<h1 className='title'>
					<Link to='/'>/ c a r d r u n n e r</Link>
				</h1>
			</header>
			<Sidebar />
			<main className='main cardList'>
				<Routes>
					<Route
						path='/'
						element={<Main cards={cards} setCards={setCards} />}
					/>
					<Route path='/Core' element={<Core cards={cards} />} />
					<Route
						path='/SideCodeResults/:sideCode'
						element={<SideCodeResults cards={cards} />}
					/>
					<Route
						path='/FactionCodeResults/:factionCode'
						element={<FactionCodeResults cards={cards} />}
					/>

					<Route
						path='/TypeCodeResults/:typeCode'
						element={<TypeCodeResults cards={cards} />}
					/>
					<Route path='/Details' element={<Details />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;
