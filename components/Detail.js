import React from 'react'
import { format } from 'date-fns'

export default function Comic({ data }) {
	const date = format(new Date("2022-10-19T00:00:00-0400"), "LLLL d, yyyy");

  return (
  	<div className="detail">
  		<h3 style={{marginBottom: "1rem"}}>{data.title}</h3>
  		<ul style={{listStyleType: "none", display: "grid", gap: "0.5rem"}}>
  			<li><strong>Issue:</strong> {data.issue}</li>
  			<li><strong>Published:</strong> {date}</li>
  			<li><strong>Creators:</strong> {data.creators.map((creator) => creator.name).join(", ")}</li>
  		</ul>
  	</div>
  )
}
