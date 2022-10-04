import React from 'react';
import { useParams } from 'react-router-dom';

function TypeCodeResults({ cards }) {
	const { typeCode } = useParams();

	const cardsByTypeCode = cards.filter((card) => card.type_code == typeCode);

	let newCardList = cardsByTypeCode.map((card) => {
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
	return newCardList;
}

export default TypeCodeResults;
