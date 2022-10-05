import React from 'react';
import { useParams } from 'react-router-dom';

function Details({ cards }) {
	const cardList = () => {
		cards.map((card) => {
			return (
				<div className='cardList'>
					<p>{card.code}</p>
				</div>
			);
		});
	};
	return { cardList };
}

export default Details;
