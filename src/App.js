import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Header from './Components/Header.js';
import Sidebar from './Components/Sidebar.js';
import Details from './Components/Details.js';
import Main from './Pages/Main.js';
import Results from './Pages/Results.js';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				app connected
				<Header />
				<nav>
					<Link to={'/'}>Home</Link>
					<Link to={'/Results'}>Results</Link>
					<Link to={'/Details'}>Details</Link>
					<Sidebar />
				</nav>
			</header>
			<main>
				<Routes>
					{/* <Route path='/' element={<Main cards={cards} />} /> */}
					{/* <Route path='/:cardCode' element={<Main />} /> */}
					<Route path='/' element={<Main />} />
					<Route path='/Results' element={<Results />} />
					<Route path='/Details' element={<Details />} />
				</Routes>
				{/* <img src={imgUrl} alt={''} /> */}
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

//   const [data, setData] = useState(null);

// 	const [error, setError] = useState(null);
