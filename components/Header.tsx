import React from 'react'
import Image from "next/image"

import { faBoltLightning } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import styles from "@/styles/Header.module.css"

import heroImage from '../assets/images/hero-photo.png';
import halftoneImage from '../assets/images/halftone.png';
import logoImage from '../assets/images/logo.png';

const myLoader = ({ src }) => {
	return src;
  }

type HeaderProps = {
	title: string
}

const Header = ({ title }: HeaderProps) => {
	const linkList = [
		{ title: "Home", url: "/", active: true },
		{ title: "Shop", url: "/shop", active: false },
		{ title: "My Favorites", url: "/", active: false }
	];
	console.log(linkList);
	
	return (
		<header className={styles.header} style={{backgroundImage: `url(${heroImage.src})`, width: '100%', height: '650px', backgroundSize: "cover"}}>
			<div className={styles.headerNav}>
				<Image loader={myLoader} src={logoImage} width="106" height="106" alt="Comic Closet" className={styles.headerLogo} />
				<nav className={styles.navCont}>
					<ul className={styles.navList}>
						<li className={styles.navItem}>Home</li>
						<li className={styles.navItem}>Shop</li>
						<li className={styles.navItem}><FontAwesomeIcon icon={faBoltLightning} style={{fontSize: "1rem", lineHeight: "1rem", margin: "0 auto", textAlign: "center", color: "white"}} /> My Favorites <span className={styles.favoritesCount}>(0)</span></li>
					</ul>
				</nav>
			</div>
			<div className={styles.headerTitleCont}>
				<h1 className={styles.headerTitle}>Comic Closet</h1>
			</div>
			<Image loader={myLoader} src={halftoneImage} alt="" className={styles.halftoneImage} />
		</header>
	);
}

export default Header;