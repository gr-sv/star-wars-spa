import React from 'react';
import Wrapper from '../wrapper/wrapper';
import Search from '../search/search';
import s from './header.module.scss';

function Header() {
	return (
		<header className={s.header}>
			<Wrapper className={s.headerWrapper}>
				<h1 className='visually-hidden'>Star Wars</h1>

				<a href='#' className={s.headerLink}>
					<img className={s.headerLogo} src='/assets/images/logo.png' alt='star wars logo'/>
				</a>

				<Search />
			</Wrapper>
		</header>
	)	
}

export default Header;