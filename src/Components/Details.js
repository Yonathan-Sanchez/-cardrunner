import React from 'react';
import { useParams } from 'react-router-dom';

function Details({ cards }) {
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
	return <div>details connected</div>;
}

export default Details;
