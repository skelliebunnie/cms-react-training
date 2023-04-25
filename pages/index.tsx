import Head from "next/head"
//useSWR allows the use of SWR inside function components
import useSWR from "swr";
import styles from "@/styles/Home.module.css"
import Comic from "@/components/Comic.tsx"

//Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Index() {
  const { data, error, isLoading } = useSWR("/api/comics", fetcher)

  if(error) return <div>Failed to load</div>
  if(isLoading) return <div>Loading...</div>
  if(!data) return null

  return (
  	<>
  	<Head>
  		<title>Comics</title>
  	</Head>
  	<main style={{maxWidth: "80%", margin: "2rem auto 0"}}>
  		<article>
  			<h1 style={{margin: "1rem auto", textAlign: "center"}}>EXERCISE 1: COMIC GRID</h1>
  		</article>
  		<article style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gridGap: "2rem"}}>
  			{data.map((comic) => (
  				<Comic key={comic.id} comic={comic} />
  			))}
  		</article>
  	</main>
  	</>
  )
}