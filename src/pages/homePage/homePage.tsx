'use client'

import React, { useState, useEffect } from 'react';
import Header from '../../widgets/header/header';
import CharacterCards from '../../widgets/characterCards/characterCards';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import s from './homePage.module.scss';

function HomePage() {

	const[data, setData] = useState<any[]>([]); // добаботать
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
	}, [currentPage]);

	//Check:
	console.log('Data: ', data);
	console.log('Characters Count: ', charactersCount)

	//Pagination
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
						className={`${s.paginationPage} ${s.paginationButton}`}
						onClick={prevPage}
						disabled={currentPage === 1}
					>
						<span className='visually-hidden'>Prev Page</span>
						<svg className={s.paginationIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
							<path d="M169.4 297.4C156.9 309.9 156.9 330.2 169.4 342.7L361.4 534.7C373.9 547.2 394.2 547.2 406.7 534.7C419.2 522.2 419.2 501.9 406.7 489.4L237.3 320L406.6 150.6C419.1 138.1 419.1 117.8 406.6 105.3C394.1 92.8 373.8 92.8 361.3 105.3L169.3 297.3z"/>
						</svg>
					</button>

					{pageNumbers?.map(pageNumber => (
						<button 
							key={pageNumber}
							className={`${s.paginationPage} ${currentPage === pageNumber ? s.activePage : ''}`}
							onClick={() => paginate(pageNumber)}
						>
							{pageNumber}
						</button>
					))}

					<button
						className={`${s.paginationPage} ${s.paginationButton}`}
						onClick={nextPage}
						disabled={currentPage === totalPages}
					>
						<span className='visually-hidden'>Next Page</span>
						<svg className={s.paginationIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
							<path d="M471.1 297.4C483.6 309.9 483.6 330.2 471.1 342.7L279.1 534.7C266.6 547.2 246.3 547.2 233.8 534.7C221.3 522.2 221.3 501.9 233.8 489.4L403.2 320L233.9 150.6C221.4 138.1 221.4 117.8 233.9 105.3C246.4 92.8 266.7 92.8 279.2 105.3L471.2 297.3z"/>
						</svg>
					</button>
				</div>
			</main>
		</>
	)	
}

export default HomePage;