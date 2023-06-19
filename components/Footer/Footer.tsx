import React from 'react'
import Image from "next/image"

import styles from "@/styles/Footer.module.css"

import logoImage from '../../assets/images/logo.png';

const myLoader = ({ src }) => {
	return src;
}

const Footer = () => {
	
	return (
		<header className={styles.footer}>
			<Image loader={myLoader} src={logoImage} width="106" height="106" alt="Comic Closet" className={styles.footerLogo} />
			<ul className={styles.footerNav}>
				<li className={styles.footerLink}><a href="#">Privacy Policy</a></li>
				<li className={styles.footerLink}><a href="#">Terms of Service</a></li>
			</ul>
			<p>Copyright 2023 Comic Closet, LLC. All rights reserved.</p>
		</header>
	);
}

export default Footer;