import { Link } from 'react-router-dom';
import Search from './Search';

function Sidebar({ cards, searchString, setSearchString, setFoundCard }) {
	return (
		<div className='sidebar'>
			<Search
				cards={cards}
				searchString={searchString}
				setSearchString={setSearchString}
				setFoundCard={setFoundCard}
			/>
			<hr />
			<h3>
				<Link to={'/Core'}>{'>'}core</Link>{' '}
			</h3>
			<hr />
			<h3>
				<Link to='/Results/identity'>{'>'}identity</Link>
			</h3>
			<hr />
			<h3>
				<Link to='/Results/corp'>{'>'}corporation</Link>
			</h3>
			<ul>
				<li>--factions</li>
				<li>
					<Link to='/Results/jinteki'>{'>'}Jinteki</Link>
				</li>
				<li>
					<Link to='/Results/haas-bioroid'>{'>'}Haas-Bioroid</Link>
				</li>
				<li>
					<Link to='/Results/nbn'>{'>'}NBN</Link>
				</li>
				<li>
					<Link to='/Results/weyland-consortium'>{'>'}Weyland Consortium</Link>
				</li>
				<br />
				<li>--types</li>
				<li>
					<Link to='/Results/agenda'>{'>'}agenda</Link>
				</li>
				<li>
					<Link to='/Results/asset'>{'>'}asset</Link>
				</li>
				<li>
					<Link to='/Results/operation'>{'>'}operation</Link>
				</li>
				<li>
					<Link to='/Results/ice'>{'>'}ice</Link>
				</li>
				<li>
					<Link to='/Results/upgrade'>{'>'}upgrade</Link>
				</li>
			</ul>
			<hr />
			<h3>
				<Link to='/Results/runner'>{'>'}runner</Link>
			</h3>
			<ul>
				<li>--factions</li>
				<li>
					<Link to='/Results/anarch'>{'>'}Anarch</Link>
				</li>
				<li>
					<Link to='/Results/criminal'>{'>'}Criminal</Link>
				</li>
				<li>
					<Link to='/Results/shaper'>{'>'}Shaper</Link>
				</li>
				<br />
				<li>--types</li>
				<li>
					<Link to='/Results/event'>{'>'}event</Link>
				</li>
				<li>
					<Link to='/Results/hardware'>{'>'}hardware</Link>
				</li>
				<li>
					<Link to='/Results/program'>{'>'}program</Link>
				</li>
				<li>
					<Link to='/Results/resource'>{'>'}resource</Link>
				</li>
			</ul>
			<footer></footer>
		</div>
	);
}

export default Sidebar;
