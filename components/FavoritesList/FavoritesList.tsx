import React from 'react'
import Image from "next/image"

import styles from "@/styles/FavoritesList.module.css"

const FavoritesList = () => {
  return (
  	<div className={styles.favoritesListContainer}>
		<h3>Favorites</h3>
		<ul className={styles.favoritesList}>
			<li className={styles.favoriteItem}>
				<span className={styles.removeFavorite}>x</span>
				<div>
					<Image loader={() => "https://picsum.photos/id/45/50/75"} src={"https://picsum.photos/id/45/50/75"} width="50" height="75" alt="" />
					<div className={styles.favoriteDetails}>
						<span><strong>Example 1</strong></span>
						<span>Issue: 0</span>
					</div>
				</div>
			</li>
			<li className={styles.favoriteItem}>
				<span className={styles.removeFavorite}>x</span>
				<div>
					<Image loader={() => "https://picsum.photos/id/756/50/75"} src={"https://picsum.photos/id/756/50/75"} width="50" height="75" alt="" />
					<div className={styles.favoriteDetails}>
						<span><strong>Example 2</strong></span>
						<span>Issue: 0</span>
					</div>
				</div>
			</li>
			<li className={styles.favoriteItem}>
				<span className={styles.removeFavorite}>x</span>
				<div>
					<Image loader={() => "https://picsum.photos/id/987/50/75"} src={"https://picsum.photos/id/987/50/75"} width="50" height="75" alt="" />
					<div className={styles.favoriteDetails}>
						<span><strong>Example 3</strong></span>
						<span>Issue: 0</span>
					</div>
				</div>
			</li>
		</ul>
	</div>
  )
}


export default FavoritesList;