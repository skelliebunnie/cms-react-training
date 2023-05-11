import Head from "next/head"
import Header from "@/components/Header.tsx"
import Comic from "@/components/Comic.tsx"

import useFetch from "@/hooks/useFetch.ts"

const publicKey = "3c0480132cc51668430a83132205a545";
const apiURL = `http://gateway.marvel.com/v1/public/comics?apikey=${publicKey}`;

export default function Index() {
	const {data, loading, error} = useFetch(apiURL);
	if(loading) return "Loading...";
	if(error) return "Error loading";
	
	let apiData = [data];
	let attribution = "Data copyright Marvel";
	let comics = [];
	console.log(apiData);
	
	if(apiData && apiData[0]) {
		attribution = apiData[0].attributionText;
		comics = apiData[0].data.results.map(comic => { return {id: comic.id, title: comic.title, issueNumber: comic.issueNumber, publishDate: comic.publishDate, creators: comic.creators.items, thumbnail: `${comic.thumbnail.path}.${comic.thumbnail.extension}`}});
	}
	console.log(comics);
	
	return (
		<>
			<Head>
				<title>Comics</title>
			</Head>
			<Header title="Comic Closet" />
			<main style={{maxWidth: "80%", margin: "2rem auto 0"}}>
				<article style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gridGap: "2rem"}}>
					{comics.map((comic) => (
						<Comic key={comic.id} comic={comic} />
					))}
				</article>
			</main>
			<footer style={{textAlign: "center", padding: "1rem", fontSize: "small", backgroundColor: "#a3a3a3"}}>
				<p>{attribution}</p>
			</footer>
		</>
	)
}