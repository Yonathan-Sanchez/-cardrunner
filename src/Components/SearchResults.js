function SearchResults({ foundCard }) {
	return (
		<div className='singleCard' key={foundCard.code}>
			<img
				src={`https://static.nrdbassets.com/v1/large/${foundCard.code}.jpg`}
				alt=''
			/>
		</div>
	);
}

export default SearchResults;
