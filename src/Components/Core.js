import React from 'react';

function Core({ cards }) {
	let coreList = cards.map((card) => {
		return (
			<div className='coreList' key={card.code}>
				<img
					src={`https://static.nrdbassets.com/v1/large/${card.code}.jpg`}
					alt=''
				/>
			</div>
		);
	});
	return <div>{coreList}</div>;
}

export default Core;
