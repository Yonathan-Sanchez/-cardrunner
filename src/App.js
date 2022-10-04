import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Header from './Components/Header.js';
import Sidebar from './Components/Sidebar.js';
import Details from './Components/Details.js';
import Main from './Pages/Main.js';
import Results from './Pages/Results.js';
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
				setCards(res.data);
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
				<Link to={'/Results'}>Core</Link>
				<Link to={'/Details'}>Details</Link>
			</nav>
			<Sidebar />
			<main className='main'>
				<Routes>
					{/* <Route path='/:cardCode' element={<Details />} /> */}
					<Route
						path='/'
						element={<Main cards={cards} setCards={setCards} />}
					/>
					<Route path='/Results' element={<Results cards={cards} />} />
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
