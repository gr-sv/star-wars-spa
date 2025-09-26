'use client'

import React, { useState, useEffect } from 'react';
import Header from '../../widgets/header/header';
import CharacterCards from '../../widgets/characterCards/characterCards';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import s from './homePage.module.scss';

function HomePage() {

	const[data, setData] = useState<any[]>([]); // вопрос?
	const[loading, setLoading] = useState(false);
	const[charactersCount, setCharactersCount] = useState(0);
	const[currentPage, setCurrentPage] = useState(1);
	const[charactersPerPage] = useState(10);

	useEffect(() => {

		const fetchData = async () => {
			try {
				setLoading(true);
				const response = await axios.get(`https://swapi.py4e.com/api/people/?page=${currentPage}`);
				setLoading(false);
				setData(response.data.results);
				setCharactersCount(response.data.count);

			} catch (e) {
				console.log('Error fetching characters:', e);

			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [currentPage]); // вопрос?

	//Check:
	console.log('Data: ', data);
	console.log('Characters Count: ', charactersCount)

	//Pagination // вопрос?
	const totalPages = Math.ceil(charactersCount / charactersPerPage);
	const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

	const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
	const nextPage = () => setCurrentPage(prev => Math.min(prev + 1, totalPages));
	const prevPage = () => setCurrentPage(prev => Math.max(prev - 1, 1));

	return (
		<>
			<Header />
			<main>
				<CharacterCards characters={data} loading={loading}/>

				<div className={s.pagination}>
					<button
						className={`${s.paginationLink} ${s.paginationButton}`}
						onClick={prevPage}
						disabled={currentPage === 1}
					>
						<span className='visually-hidden'>Prev Page</span>
						<svg className={s.paginationIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
							<path d="M167.5 303C158.1 312.4 158.1 327.6 167.5 336.9L367.5 536.9C376.9 546.3 392.1 546.3 401.4 536.9C410.7 527.5 410.8 512.3 401.4 503L218.4 320L401.4 137C410.8 127.6 410.8 112.4 401.4 103.1C392 93.8 376.8 93.7 367.5 103.1L167.5 303z" />
						</svg>
					</button>

					{pageNumbers?.map(pageNumber => (
						<a 
							href='!#'
							key={pageNumber}
							className={`${s.paginationLink} ${currentPage === pageNumber ? s.activePage : ''}`}
							onClick={() => paginate(pageNumber)}
						>
							{pageNumber}
						</a>
					))}

					<button
						className={`${s.paginationLink} ${s.paginationButton}`}
						onClick={nextPage}
						disabled={currentPage === totalPages}
					>
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