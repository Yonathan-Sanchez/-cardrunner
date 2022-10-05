import { Link } from 'react-router-dom';

function Main(props) {
	return (
		<div className='landing'>
			<h2>
				Welcome to <span className='fancy'>Cardrunner</span>.
			</h2>
			<p>
				Here, you can browse the cards of the base Netrunner game by subsets.
			</p>
			<p>
				{'<--'} Pick a subset or see the full <Link to={'/Core'}>core</Link>{' '}
				set.
			</p>
		</div>
	);
}

export default Main;
