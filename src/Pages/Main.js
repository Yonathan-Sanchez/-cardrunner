import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Main() {
	const [cards, setCards] = useState([]);
	const [cardCode, setCardCode] = useState('');
	const [imgUrl, setImgUrl] = useState('');
	const [loading, setLoading] = useState(true);

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
	function getCardData() {
		// 	// let randomCardCode = getRandomCardCode(5, 33066);
		// 	// console.log(randomCardCode);

		const url = `https://netrunnerdb.com/api/2.0/public/cards`;
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				console.log('data:', res.data);
				setCards(res.data);
				setCardCode(res.data[70].code);
				console.log(cardCode);
				setLoading(false);
			})
			.catch(console.error);
	}
	// async function getCardData() {
	// 	// let randomCardCode = getRandomCardCode(5, 33066);
	// 	// console.log(randomCardCode);
	// 	try {
	// 		const url = `https://netrunnerdb.com/api/2.0/public/cards`;

	// 		const res = await fetch(url);
	// 		const data = await res.json();

	// 		// console.log('data:', data.data);
	// 		setCards(data.data);
	// 		// console.log(data.data[70]);
	// 		setCardCode(data.data[70].code);
	// 		// console.log(cardCode);
	// 		setLoading(false);
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// }

	useEffect(() => {
		getCardData();
		if (loading == false) {
			setImgUrl(`https://static.nrdbassets.com/v1/large/${cardCode}.jpg`);
		}
	}, [cardCode]);
	// const cardUrl = `https://netrunnerdb.com/api/2.0/public/card/${cardCode}`;

	function notLoaded() {
		return (
			<div>
				<p>Loading...</p>
			</div>
		);
	}

	function loaded() {
		return (
			<div>
				<img src={imgUrl} alt={''} />;
			</div>
		);
	}
	return !loading ? loaded() : notLoaded();
}

export default Main;
