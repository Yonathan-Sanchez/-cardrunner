import { useParams } from 'react-router-dom';

function Results({ cards }) {
	const { params } = useParams();
	let filteredCards = [];
	// function defineParams(params) {
	switch (params) {
		// case 'core':

		case 'runner':
		case 'corp':
			filteredCards = cards.filter((card) => card.side_code == params);
			break;
		case 'anarch':
		case 'criminal':
		case 'shaper':
		case 'jinteki':
		case 'haas-bioroid':
		case 'nbn':
		case 'weyland-consortium':
			filteredCards = cards.filter((card) => card.faction_code == params);
			break;
		case 'identity':
		case 'event':
		case 'hardware':
		case 'program':
		case 'resource':
		case 'agenda':
		case 'asset':
		case 'operation':
		case 'ice':
		case 'upgrade':
			filteredCards = cards.filter((card) => card.type_code == params);
	}
	// return filteredCards;
	// }

	let newCardList = filteredCards.map((card) => {
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
export default Results;
