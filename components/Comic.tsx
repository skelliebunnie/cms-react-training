import React from 'react'
import Image from "next/image"

import Button from "@/components/Button.tsx"
import Detail from "@/components/Detail.tsx"

const myLoader = ({ src }) => {
  return src;
}

type ComicProps = {
	image: string,
	comic: {
		id: number,
		title: string,
		issueNumber: number,
		publishDate: string,
		creators: {
			resourceURI: string,
			name: string,
			role: string
		}
	}
}

const Comic = (props: ComicProps) => {
	const comicData = props.comic;
	
  return (
    <section style={{display: "flex", flexFlow: "column nowrap", marginBottom: "1rem"}}>
    	<Image loader={myLoader} src={comicData.thumbnail} width="200" height="300" alt={comicData.title} style={{width: "100%", height: "auto", boxShadow: "var(--image-shadow)"}} />
  		<Button key={comicData.id} color="#FD3E81" />
  		<Detail key={comicData.id} title={comicData.title} issue={comicData.issueNumber} published={comicData.publishDate} creators={comicData.creators} />
    </section>
  )
}

export default Comic;