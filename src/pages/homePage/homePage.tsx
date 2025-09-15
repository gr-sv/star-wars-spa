'use client'

import React, { useState, useEffect } from 'react';
import Header from '../../widgets/header/header';
import CharacterCards from '../../widgets/characterCards/characterCards';
import axios from 'axios';

import s from './homePage.module.scss';
import Wrapper from '../../widgets/wrapper/wrapper';

function HomePage() {

	const[data, setData] = useState([]);
	const[loading, setLoading] = useState(false);
	const[charactersCount, setCharactersCount] = useState(0);
	const[currentPage, setCurrentPage] = useState(1);
	const[charactersPerPage] = useState(9);

	useEffect(() => {

		const fetchData = async () => {
			try{
				setLoading(true);
				const response = await axios.get('https://swapi.py4e.com/api/people/');

				setLoading(false);
				setData(response.data.results);
				setCharactersCount(response.data.count);

			} catch (e) {
				console.log('Error:', e);

			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	//Check:
	console.log('Data: ', data);
	console.log('Characters Count: ', charactersCount)

	//Pagination
	const charactersLastIndex = currentPage * charactersPerPage;
	const charactersFirstIndex = charactersLastIndex - charactersPerPage;
	const charactersOnPage = data.slice(charactersFirstIndex, charactersLastIndex);

	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(charactersCount / charactersPerPage); i++) {
		pageNumbers.push(i);
	}
	
	// Check:
	console.log('Page Numbers: ', pageNumbers);
 
	return (
		<>
			<Header />
			<main>
				<CharacterCards characters={data} loading={loading}/>

				<Wrapper>
					<div className={s.pagination}>
						{pageNumbers.map(pageNumber => (
							<a href='!#' key={pageNumber} className={s.paginationLink}>
								{pageNumber}
							</a>
						))}
					</div>
				</Wrapper>				
			</main>
		</>
	)	
}

export default HomePage;