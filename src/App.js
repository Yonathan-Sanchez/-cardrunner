import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Header from './Components/Header.js';
import Sidebar from './Components/Sidebar.js';
import Details from './Components/Details.js';
import Main from './Pages/Main.js';
import Core from './Components/Core.js';
import SideCodeResults from './Pages/SideCodeResults.js';
import './CSS/App.css';

function App() {
	const [cards, setCards] = useState([]);
	// const [cardCode, setCardCode] = useState('');
	// const [imgUrl, setImgUrl] = useState('');
	const [loading, setLoading] = useState(true);

	function getCardData() {
		const url = `https://netrunnerdb.com/api/2.0/public/cards`;
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				// console.log('data:', res.data);
				setCards(res.data.filter((card) => card.pack_code === 'core'));
				setLoading(false);
			})
			.catch(console.error);
	}

	useEffect(() => {
		getCardData();
		// if (loading == false) {
		// setImgUrl(`https://static.nrdbassets.com/v1/large/${cardCode}.jpg`);
		// }
	}, [loading]);

	return (
		<div className='App'>
			<header className='App-header'>
				<Header />
			</header>
			<nav className='navBar'>
				<Link to={'/'}>Home</Link>
				<Link to={'/Core'}>Core</Link>
				<Link to={'/Details'}>Details</Link>
			</nav>
			<Sidebar />
			<main className='main'>
				{/* {!loading ? cards[0].faction_code : <div>loading...</div>} */}
				<Routes>
					{/* <Route path='/:cardCode' element={<Details />} /> */}
					<Route
						path='/'
						element={<Main cards={cards} setCards={setCards} />}
					/>
					<Route path='/Core' element={<Core cards={cards} />} />
					<Route
						path='/Results/:sidecode'
						element={<SideCodeResults cards={cards} />}
					/>
					<Route path='/Details' element={<Details />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;

/*
src/components/App/App.js
  return (
    <div>
      <nav>
      // the link component produces an a element
        <Link to=""></Link>
        <Link to=""></Link>
      </nav>
      <main>
        <Routes>
             // routes render the specified component we pass as the element prop.
            <Route path="" element={}/>
            <Route path="/example" element={}/>
        </Routes>
      </main>
    </div>
  )
  */
