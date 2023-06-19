import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBoltLightning } from "@fortawesome/free-solid-svg-icons"

import styles from "@/styles/FavoritesButton.module.css"

type ButtonProps = {
	active: boolean
}

const Button = ({ active }: ButtonProps) => {
  return (
  	<div className={`${styles.favoritesButton} button ${active ? styles.active : ''}`}>
  		<FontAwesomeIcon icon={faBoltLightning} className={styles.favoritesIcon} />
  	</div>
  );
}

export default Button;