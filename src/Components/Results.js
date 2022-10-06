import { useParams } from 'react-router-dom';

function Results({ cards }) {
	const { params } = useParams();
	let filteredCards = '';
	switch (params) {
		default:
			'try again';
			break;
		case ('Runner', 'Corporation'):
			filteredCards = cards.filter((card) => card.side_code == params);
			break;
		case ('anarch',
		'criminal',
		'shaper',
		'jinteki',
		'haas-bioroid',
		'nbn',
		'weyland-consortium'):
			filteredCards = cards.filter((card) => card.faction_code == params);
			break;
		case ('identity',
		'event',
		'hardware',
		'program',
		'resource',
		'agenda',
		'asset',
		'operation',
		'ice',
		'upgrade'):
			filteredCards = cards.filter((card) => card.type_code == params);
	}

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
