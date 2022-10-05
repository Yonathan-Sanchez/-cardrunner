import { Link } from 'react-router-dom';

function Main(props) {
	return (
		<div className='landing'>
			{'<--'} Pick a subset or see the <Link to={'/Core'}>full core set</Link>.
		</div>
	);
}

export default Main;
