import React from 'react'
import { format } from 'date-fns'

import styles from "@/styles/ComicsListView.module.css"

type DetailProps = {
	title: string,
	issue: number,
	published: string,
	creators: any
}

const Detail = (props: DetailProps) => {
	const date = format(new Date(props.published), "LLLL d, yyyy");

  return (
  	<div className={styles.comicDetail}>
  		<h3 test-id="title" style={{marginBottom: "1rem"}}>{props.title}</h3>
  		<ul style={{listStyleType: "none", display: "grid", gap: "0.5rem"}}>
  			<li data-testid="issueNumber"><strong>Issue:</strong> {props.issue}</li>
  			<li data-testid="publishDate"><strong>Published:</strong> {date}</li>
  			<li data-testid="creators"><strong>Creators:</strong> {props.creators.length > 0 ? props.creators.map((creator:any) => creator.name).join(", ") : "n/a"}</li>
  		</ul>
  	</div>
  )
}


export default Detail;