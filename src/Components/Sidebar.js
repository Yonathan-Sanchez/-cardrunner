import { useReducer } from 'react';
import { Link } from 'react-router-dom';

function Sidebar({ cards }) {
	const cardList = () => {
		let list = cards.map((card) => {
			return (
				<div className='cardList'>
					<p>{card}</p>
				</div>
			);
		});
		// let cardList = cards.map((card) => {
		// 	return (
		// 		<div className='sidebarItem' key={card.code}>
		// 			<div>{card.code}</div>
		// 			<div>{card.title}</div>
		// 			<br />

		// 			{/* <img
		// 			src={`https://static.nrdbassets.com/v1/large/${card.code}.jpg`}
		// 			alt=''
		// 		/> */}
		// 		</div>
		// 	);
		// });
	};

	return (
		<div className='sidebar'>
			{/* <h3>SIDE/</h3>
			<ul>
				<li>corporation</li>
				<li>runner</li>
				<li>neutral</li>
			</ul> */}
			<h3>/subset</h3>
			<Link to='/'>/corp</Link>
			<ul>
				<li>
					<Link to='/'>/Jinteki</Link>
				</li>
				<li>
					<Link to='/'>/Haas-Bioroid</Link>
				</li>
				<li>
					<Link to='/'>/NBN</Link>
				</li>
				<li>
					<Link to='/'>/Weyland Consortium</Link>
				</li>
				<li>
					/type
					<ul>
						<li>
							<Link to='/'>/agenda</Link>
						</li>
						<li>
							<Link to='/'>/asset</Link>
						</li>
						<li>
							<Link to='/'>/operation</Link>
						</li>
						<li>
							<Link to='/'>/ice</Link>
						</li>
						<li>
							<Link to='/'>/upgrade</Link>
						</li>
					</ul>
				</li>
			</ul>
			<Link to='/'>/runner</Link>
			<ul>
				<li>
					<Link to='/'>/Anarch</Link>
				</li>
				<li>
					<Link to='/'>/Criminal</Link>
				</li>
				<li>
					<Link to='/'>/Shaper</Link>
				</li>
				<li>
					/type
					<ul>
						<li>
							<Link to='/'>/identity</Link>
						</li>
						<li>
							<Link to='/'>/event</Link>
						</li>
						<li>
							<Link to='/'>/hardware</Link>
						</li>
						<li>
							<Link to='/'>/program</Link>
						</li>
						<li>
							<Link to='/'>/resource</Link>
						</li>
					</ul>
				</li>
			</ul>
			<Link to='/'>/neutral</Link>
		</div>
	);
}

export default Sidebar;
/*
useReducer
*/
