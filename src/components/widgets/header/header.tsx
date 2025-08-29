import React from 'react';
import s from './header.module.scss';

function Header() {
	return (
		<header className={s.header}>
			<h1 className='visually-hidden'>Star Wars</h1>

			<a className={s.headerLink}>
				<img className={s.headerLogo} src='/assets/images/logo.png' />
			</a>
			
		</header>
	)	
}

export default Header;