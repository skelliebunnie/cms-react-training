import React from 'react'
import { format } from 'date-fns'

type DetailProps = {
	title: string,
	issue: number,
	published: string,
	creators: {
		resourceURI: string,
  	name: string,
  	role: string
	}
}

const Detail = (props: DetailProps) => {
	const date = format(new Date("2022-10-19T00:00:00-0400"), "LLLL d, yyyy");

  return (
  	<div className="detail">
  		<h3 style={{marginBottom: "1rem"}}>{props.title}</h3>
  		<ul style={{listStyleType: "none", display: "grid", gap: "0.5rem"}}>
  			<li><strong>Issue:</strong> {props.issue}</li>
  			<li><strong>Published:</strong> {date}</li>
  			<li><strong>Creators:</strong> {props.creators.map((creator) => creator.name).join(", ")}</li>
  		</ul>
  	</div>
  )
}


export default Detail;