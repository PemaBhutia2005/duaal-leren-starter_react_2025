import React from 'react';
import { clsx } from 'clsx';
import styles from './App.module.scss';

function Header() {
	return (
		<h1 className={clsx(styles['p-home__container__title'])}>Recycle!</h1>
	);
}

export default Header;
