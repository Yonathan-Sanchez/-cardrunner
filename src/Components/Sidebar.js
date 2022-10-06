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
				<Link to='/TypeCodeResults/identity'>{'>'}identity</Link>
			</h3>
			<hr />
			<h3>
				<Link to='/SideCodeResults/corp'>{'>'}corporation</Link>
			</h3>
			<ul>
				<li>--factions</li>
				<li>
					<Link to='/FactionCodeResults/jinteki'>{'>'}Jinteki</Link>
				</li>
				<li>
					<Link to='/FactionCodeResults/haas-bioroid'>{'>'}Haas-Bioroid</Link>
				</li>
				<li>
					<Link to='/FactionCodeResults/nbn'>{'>'}NBN</Link>
				</li>
				<li>
					<Link to='/FactionCodeResults/weyland-consortium'>
						{'>'}Weyland Consortium
					</Link>
				</li>
				<br />
				<li>--types</li>
				<li>
					<Link to='/TypeCodeResults/agenda'>{'>'}agenda</Link>
				</li>
				<li>
					<Link to='/TypeCodeResults/asset'>{'>'}asset</Link>
				</li>
				<li>
					<Link to='/TypeCodeResults/operation'>{'>'}operation</Link>
				</li>
				<li>
					<Link to='/TypeCodeResults/ice'>{'>'}ice</Link>
				</li>
				<li>
					<Link to='/TypeCodeResults/upgrade'>{'>'}upgrade</Link>
				</li>
			</ul>
			<hr />
			<h3>
				<Link to='/SideCodeResults/runner'>{'>'}runner</Link>
			</h3>
			<ul>
				<li>--factions</li>
				<li>
					<Link to='/FactionCodeResults/anarch'>{'>'}Anarch</Link>
				</li>
				<li>
					<Link to='/FactionCodeResults/criminal'>{'>'}Criminal</Link>
				</li>
				<li>
					<Link to='/FactionCodeResults/shaper'>{'>'}Shaper</Link>
				</li>
				<br />
				<li>--types</li>
				<li>
					<Link to='/TypeCodeResults/event'>{'>'}event</Link>
				</li>
				<li>
					<Link to='/TypeCodeResults/hardware'>{'>'}hardware</Link>
				</li>
				<li>
					<Link to='/TypeCodeResults/program'>{'>'}program</Link>
				</li>
				<li>
					<Link to='/TypeCodeResults/resource'>{'>'}resource</Link>
				</li>
			</ul>
			<footer></footer>
		</div>
	);
}

export default Sidebar;
