'use client'

import React, { useState, useEffect } from 'react';
import Header from '../../widgets/header/header';
import CharacterCards from '../../widgets/characterCards/characterCards';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import s from './homePage.module.scss';

function HomePage() {

	const[data, setData] = useState([]);
	const[loading, setLoading] = useState(false);
	const[charactersCount, setCharactersCount] = useState(0);
	const[currentPage, setCurrentPage] = useState(1);
	const[charactersPerPage] = useState(10);

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
	
	const paginate = (pageNumber: number) => {
		setCurrentPage(pageNumber);
	}
	
	// Check:
	console.log('Page Numbers: ', pageNumbers);

	const nextPage = () => {
		setCurrentPage(prev => prev + 1);
	}
 
	const prevPage = () => {
		setCurrentPage(prev => prev - 1);
	}

	return (
		<>
			<Header />
			<main>
				<CharacterCards characters={charactersOnPage} loading={loading}/>

				<div className={s.pagination}>
					<button className={`${s.paginationLink} ${s.paginationButton}`} onClick={prevPage}>
						<span className='visually-hidden'>Prev Page</span>
						<svg className={s.paginationIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
							<path d="M167.5 303C158.1 312.4 158.1 327.6 167.5 336.9L367.5 536.9C376.9 546.3 392.1 546.3 401.4 536.9C410.7 527.5 410.8 512.3 401.4 503L218.4 320L401.4 137C410.8 127.6 410.8 112.4 401.4 103.1C392 93.8 376.8 93.7 367.5 103.1L167.5 303z" />
						</svg>
					</button>

					{pageNumbers.map(pageNumber => (
						<a href='!#' key={pageNumber} className={s.paginationLink} onClick={() => paginate(pageNumber)}>
							{pageNumber}
						</a>
					))}

					<button className={`${s.paginationLink} ${s.paginationButton}`} onClick={nextPage}>
						<span className='visually-hidden'>Next Page</span>
						<svg className={s.paginationIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
							<path d="M313.5 239c9.4 9.4 9.4 24.6 0 33.9l-200 200c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l183-183-183-183c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l200 200z" />
						</svg>
					</button>
				</div>
			</main>
		</>
	)	
}

export default HomePage;