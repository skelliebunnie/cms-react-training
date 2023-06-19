import React from 'react'
import styles from "@/styles/Intro.module.css"

type IntroProps = {
	badgeText: string,
	titleText: string,
	textContent: string
}

const Intro = (props: IntroProps) => {

  return (
  	<div className={styles.introCont}>
		<h1 className={styles.introTitle}>{props.titleText}</h1>
  		<h5 className={styles.introBadge}>{props.badgeText}</h5>
		<p>{props.textContent}</p>
  	</div>
  )
}


export default Intro;