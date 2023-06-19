import React from 'react'

import FavoritesLink from "@/components/Hero/FavoritesLink"

import styles from "@/styles/Header.module.css"

const Nav = () => {
  return (
	<nav className={styles.navCont}>
		<ul className={styles.navList}>
			<li className={styles.navItem}>Home</li>
			<li className={styles.navItem}>Shop</li>
			<li className={styles.navItem}><FavoritesLink count={3} /></li>
		</ul>
	</nav>
  )
}


export default Nav;