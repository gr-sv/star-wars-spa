import React from 'react';
import Header from '../../components/widgets/header/header';
import CharacterCards from '../../components/widgets/characterCards/characterCards';

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