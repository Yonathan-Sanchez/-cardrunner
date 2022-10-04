import React from 'react';

function Results({ cards }) {
	// let cardList = cards.filter((card) => (card.pack_code = 'core'));
	let cardList = cards.map((card) => {
		if (card.code < 1114 && card.code > 1000) {
			return (
				<div className='cardListItem' key={card.code}>
					<img
						src={`https://static.nrdbassets.com/v1/large/${card.code}.jpg`}
						alt=''
					/>
					<br />
				</div>
			);
		}
	});
	return <div className='cardList'>{cardList}</div>;
}

export default Results;
