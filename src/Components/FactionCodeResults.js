import { useParams } from 'react-router-dom';

function FactionCodeResults({ cards }) {
	const { factionCode } = useParams();

	const cardsByFactionCode = cards.filter(
		(card) => card.faction_code == factionCode
	);

	let newCardList = cardsByFactionCode.map((card) => {
		return (
			<div className='cardListItem' key={card.code}>
				<img
					src={`https://static.nrdbassets.com/v1/large/${card.code}.jpg`}
					alt=''
				/>
			</div>
		);
	});
	return newCardList;
}

export default FactionCodeResults;
