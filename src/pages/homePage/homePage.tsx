'use client'

import React, { useState, useEffect } from 'react';
import Header from '../../widgets/header/header';
import CharacterCards from '../../widgets/characterCards/characterCards';
import axios from 'axios';

function HomePage() {

	const[data, setData] = useState([]);
	const[loading, setLoading] = useState(false);

	useEffect(() => {

		const fetchData = async () => {
			try{
				setLoading(true);
				const response =await axios.get('https://swapi.py4e.com/api/people/');

				setLoading(false);
				setData(response.data.results);

			} catch (e) {
				console.log('Error:', e);

			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	console.log(data);

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