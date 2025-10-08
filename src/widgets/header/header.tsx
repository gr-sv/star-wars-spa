import React from 'react';
import Wrapper from '../wrapper/wrapper';
import Search from '../search/search';
import { Link } from 'react-router-dom';
import s from './header.module.scss';

function Header() {
	return (
		<header className={s.header}>
			<Wrapper className={s.headerWrapper}>
				<h1 className='visually-hidden'>Star Wars</h1>

				<Link to='/' className={s.headerLink}>
					<img className={s.headerLogo} src='/assets/images/logo.png' alt='star wars logo'/>
				</Link>

				<Search />
			</Wrapper>
		</header>
	)	
}

export default Header;