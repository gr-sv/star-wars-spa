import React from 'react';
import s from './header.module.scss';
import Wrapper from '../wrapper/wrapper';

function Header() {
	return (
		<header className={s.header}>
			<Wrapper>
				<h1 className='visually-hidden'>Star Wars</h1>

				<a className={s.headerLink}>
					<img className={s.headerLogo} src='/assets/images/logo.png' alt='star wars logo'/>
				</a>
			</Wrapper>
		</header>
	)	
}

export default Header;