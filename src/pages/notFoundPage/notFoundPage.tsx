import React from 'react';
import Header from '../../widgets/header/header';
import Wrapper from '../../widgets/wrapper/wrapper';
import s from './notFoundPage.module.scss';

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