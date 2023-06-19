import { useState, useEffect } from 'react';

import useFetch from "../../hooks/useFetch"
import { useAppContext }  from "../../contexts/AppContext";

import FilterIndex from "@/components/Filter/FilterIndex"
import Comic from "@/components/Comic/Comic"

import styles from "@/styles/ComicsListView.module.css"

type ComicProps = {
	id: number,
	thumbnail: {
		path: string,
		extension: string
	},
	title: string,
	issueNumber: number,
	dates: {
		type: string,
		date: string
	},
	creators: {
		resourceURI: string,
		name: string,
		role: string
	}
}

const ComicsListView = () => {
	const {data, loading, error, total, limit, fetchData} = useFetch();
	const { filter, setFilter } = useAppContext();
	
	useEffect(() => {
		fetchData();
	}, []);
	
	return (
		<article className={styles.listViewContainer}>
			{
				loading ? (
					<h2>Loading</h2>
				)
				: error ? (
					<h2>Error Loading Comics</h2>
				)
				: (
					<>
					<FilterIndex />
					<section className={styles.listView}>
					{data?.results?.map((comic: ComicProps) => (
						<Comic key={comic.id} comic={comic} />
					))}
					</section>
					</>
				)
			}
		</article>
	)
}

export default ComicsListView;