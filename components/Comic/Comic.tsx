import React from 'react'
import Image from "next/image"

import Button from "@/components/FavoritesButton/Button"
import Detail from "@/components/Comic/Detail"

import styles from "@/styles/ComicsListView.module.css"

type ComicProps = {
	comic: {
		id: number,
		thumbnail: {
			path: string,
			extension: string
		},
		title: string,
		issueNumber: number,
		dates: [
			{ 
				type: string,
				date: string
			}
		],
		creators: {
			items: {
				resourceURI: string,
				name: string,
				role: string
			}
		}
	}
}

const Comic = ({ comic }: ComicProps) => {
	const comicId = comic.id;
	const comicImage = `${comic.thumbnail.path}.${comic.thumbnail.extension}`;
	const comicTitle = comic.title;
	const comicIssueNumber = comic.issueNumber;
	const comicPublishDate = comic.dates[0].date;
	const comicCreators = comic.creators.items;
	console.log(comicCreators);
	
  return (
    <section data-testid="comic" className={styles.comicItem}>
    	<div>
			<Image loader={() => comicImage} src={comicImage} width="183" height="276" alt={comicTitle} className={styles.comicImage} />
			<Button active={false} />
		</div>
  		<Detail key={comicId} title={comicTitle} issue={comicIssueNumber} published={comicPublishDate} creators={comicCreators} />
    </section>
  )
}

export default Comic;