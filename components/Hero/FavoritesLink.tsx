import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBoltLightning } from "@fortawesome/free-solid-svg-icons"

import styles from "@/styles/Header.module.css"

type FavoritesProps = {
	count: number
}
const FavoritesLink = (props: FavoritesProps) => {
	let favesCount = 0;
	if(props.count !== null) favesCount = props.count;
	
	return (
		<>
		<FontAwesomeIcon icon={faBoltLightning} style={{fontSize: "1rem", lineHeight: "1rem", margin: "0 auto", textAlign: "center", color: "white"}} /> My Favorites <span className={styles.favoritesCount}>({props.count})</span>
		</>
	)
}


export default FavoritesLink;