import React from 'react';
import s from './notFoundPage.module.scss'
import Header from '../../components/widgets/header/header';
import Wrapper from '../../components/widgets/wrapper/wrapper';

function NotFoundPage() {
	return (
		<>
			<Header />
			<main>
				<Wrapper className={s.wrapper}>
					<h1 className={s.title}>Oops!</h1>
					<p className={s.text}>Page not found</p>
				</Wrapper>
				
			</main>
		</>
	)	
}

export default NotFoundPage;