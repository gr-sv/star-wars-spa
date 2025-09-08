import React from 'react';
import Header from '../../widgets/header/header';
import CharacterCards from '../../widgets/characterCards/characterCards';

function HomePage() {
	return (
		<>
			<Header />
			<main>
				<CharacterCards />
			</main>
		</>
	)	
}

export default HomePage;