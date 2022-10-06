import { Link } from 'react-router-dom';

function Main(props) {
	return (
		<div className='landing'>
			<h2>
				Welcome to <span className='fancy'>Cardrunner.</span>
			</h2>
			<p>
				Browse the cards of the base Netrunner game by subsets or find cards by
				name.
			</p>
			<p>
				{'<--'} Type in a name, click on a subset, or see the full{' '}
				<Link to={'/Core'}>core</Link> set.
			</p>
		</div>
	);
}

export default Main;
