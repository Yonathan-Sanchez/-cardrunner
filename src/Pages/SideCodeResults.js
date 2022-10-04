import React from 'react';
import { useParams } from 'react-router-dom';

function SideCodeResults({ cards }) {
	const { sidecode } = useParams();

	const cardsBySideCode = cards.filter((card) => card.side_code === sidecode);

	let newCardList = cardsBySideCode.map((card) => {
		return (
			<div className='cardListItem' key={card.code}>
				<img
					src={`https://static.nrdbassets.com/v1/large/${card.code}.jpg`}
					alt=''
				/>
				{/* <div>{card.side_code}</div> */}

				<br />
			</div>
		);
	});
	return <div className='cardList'>{newCardList}</div>;
}

export default SideCodeResults;
