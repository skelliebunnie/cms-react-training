import React from 'react'
import Image from "next/image"

import Nav from "@/components/Hero/Nav"

import styles from "@/styles/Header.module.css"

import heroImage from '../../assets/images/hero-photo.png';
import halftoneImage from '../../assets/images/halftone.png';
import logoImage from '../../assets/images/logo.png';

type HeroProps = {
	title: string
}

const Hero = ({ title }: HeroProps) => {
	
	return (
		<header className={styles.header} style={{backgroundImage: `url(${heroImage.src})`, width: '100%', height: '650px', backgroundSize: "cover"}}>
			<div className={styles.headerNav}>
				<Image src={logoImage} width="106" height="106" alt={title} title={title} className={styles.headerLogo} />
				<Nav />
			</div>
			<div className={styles.headerTitleCont}>
				<h1 className={styles.headerTitle}>{title}</h1>
			</div>
			<Image src={halftoneImage} alt="" className={styles.halftoneImage} />
		</header>
	);
}

export default Hero;