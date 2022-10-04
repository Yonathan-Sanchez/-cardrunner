import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Main({ cards }) {
	// const [cards, setCards] = useState([]);
	// const [cardCode, setCardCode] = useState('');
	// const [imgUrl, setImgUrl] = useState('');
	// const [loading, setLoading] = useState(true);

	// // function getRandomCardCode(min, max) {
	// // 	let num = 0;

	// // 	min = Math.ceil(min);
	// // 	max = Math.floor(max);
	// // 	num = Math.floor(Math.random() * (max - min) + min);
	// // 	if (num < 10000) {
	// // 		return '0' + num;
	// // 	} else if (num < 1000) {
	// // 		return '00' + num;
	// // 	} else if (num < 100) {
	// // 		return '000' + num;
	// // 	} else if (num < 10) {
	// // 		return '0000' + num;
	// // 	} else return num;
	// // }
	// function getCardData() {
	// 	// let randomCardCode = getRandomCardCode(5, 33066);
	// 	// console.log(randomCardCode);

	// 	const url = `https://netrunnerdb.com/api/2.0/public/cards`;
	// 	fetch(url)
	// 		.then((res) => res.json())
	// 		.then((res) => {
	// 			console.log('data:', res.data);
	// 			setCards(res.data);
	// 			// setCardCode(res.data[1014].code);
	// 			// console.log(cardCode);
	// 			setLoading(false);
	// 		})
	// 		.catch(console.error);
	// }

	//.map = grab all the title from the indices, build a list

	// useEffect(() => {
	// 	getCardData();
	// 	// if (loading == false) {
	// 	// setImgUrl(`https://static.nrdbassets.com/v1/large/${cardCode}.jpg`);

	// 	// }
	// }, [loading]);
	// const cardUrl = `https://netrunnerdb.com/api/2.0/public/card/${cardCode}`;

	// function notLoaded() {
	// 	return (
	// 		<div>
	// 			<p>Loading...</p>
	// 		</div>
	// 	);
	// }

	// function loaded() {

	// let cardList = cards.map((card) => {
	// 	if (card.pack_code) {
	// 		return (
	// 			<div className='cardListItem' key={card.code}>
	// 				{/* <div>{card.pack_code}</div> */}

	// 				<img
	// 					src={`https://static.nrdbassets.com/v1/large/${card.code}.jpg`}
	// 					alt=''
	// 				/>
	// 				<br />
	// 			</div>
	// 		);
	// 	}
	// });

	return (
		<>
			<p>
				{'<--'} Pick a subset or see the{' '}
				<Link to={'/results'}>full core set</Link>.
			</p>
			{/* <img
				src={`https://static.nrdbassets.com/v1/large/${cards[0].code}.jpg`}
				alt=''
			/> */}
		</>
	);
}

export default Main;
