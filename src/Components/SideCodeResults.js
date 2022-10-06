import { useParams } from 'react-router-dom';

function SideCodeResults({ cards }) {
	const { sideCode } = useParams();

	const cardsBySideCode = cards.filter((card) => card.side_code == sideCode);

	let newCardList = cardsBySideCode.map((card) => {
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

export default SideCodeResults;
