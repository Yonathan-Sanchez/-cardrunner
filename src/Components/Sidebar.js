import { useReducer } from 'react';
import { Link } from 'react-router-dom';

function Sidebar({ cards }) {
	return (
		<div className='sidebar'>
			{/* <h3>SIDE/</h3>
			<ul>
				<li>corporation</li>
				<li>runner</li>
				<li>neutral</li>
			</ul> */}
			<h3>/subsets</h3>
			<Link to='/results/corp'>/corp</Link>
			<ul>
				<li>
					<Link to='/'>/Jinteki</Link>
				</li>
				<li>
					<Link to='/'>/Haas-Bioroid</Link>
				</li>
				<li>
					<Link to='/'>/NBN</Link>
				</li>
				<li>
					<Link to='/'>/Weyland Consortium</Link>
				</li>
				<li>
					/type
					<ul>
						<li>
							<Link to='/'>/agenda</Link>
						</li>
						<li>
							<Link to='/'>/asset</Link>
						</li>
						<li>
							<Link to='/'>/operation</Link>
						</li>
						<li>
							<Link to='/'>/ice</Link>
						</li>
						<li>
							<Link to='/'>/upgrade</Link>
						</li>
					</ul>
				</li>
			</ul>
			<Link to='/results/runner'>/runner</Link>
			<ul>
				<li>
					<Link to='/'>/Anarch</Link>
				</li>
				<li>
					<Link to='/'>/Criminal</Link>
				</li>
				<li>
					<Link to='/'>/Shaper</Link>
				</li>
				<li>
					/type
					<ul>
						<li>
							<Link to='/'>/identity</Link>
						</li>
						<li>
							<Link to='/'>/event</Link>
						</li>
						<li>
							<Link to='/'>/hardware</Link>
						</li>
						<li>
							<Link to='/'>/program</Link>
						</li>
						<li>
							<Link to='/'>/resource</Link>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	);
}

export default Sidebar;
/*
useReducer
*/
