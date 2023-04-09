import React from 'react'
import Image from "next/image"

import Button from "@/components/Button.js"
import Detail from "@/components/Detail.js"

const myLoader = ({ src }) => {
  return src;
}

export default function Comic(props) {
	const comic = props.comic;
	const buttonProps = { color: "#FD3E81" };
	const detailProps = {title: comic.title, issue: comic.issueNumber, published: comic.publishDate, creators: comic.creators};
	
  return (
    <section style={{display: "flex", flexFlow: "column nowrap"}}>
    	<Image loader={myLoader} src={comic.thumbnail} width="200" height="300" alt={comic.title} style={{width: "100%", height: "auto", boxShadow: "var(--image-shadow)"}} />
  		<Button key={props.comic.id} data={buttonProps} />
  		<Detail key={props.comic.id} data={detailProps} />
    </section>
  )
}
