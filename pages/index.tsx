import Head from "next/head"
import Hero from "@/components/Hero/Hero"
import Intro from "@/components/Intro/Intro"
import ComicsListView from "@/components/ComicsListView/ComicsListView"
import FavoritesList from "@/components/FavoritesList/FavoritesList"
import Footer from "@/components/Footer/Footer"

import AppContextProvider  from "../contexts/AppContext";

import styles from "@/styles/Index.module.css"

export default function Index() {
	const IntroText = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse eum excepturi accusamus incidunt magni cum, alias iusto veritatis beatae consequuntur corrupti molestiae quidem earum dolorum quibusdam vero sequi laboriosam! Magnam.";
	
	return (
		<div>
			<Head>
				<title>Comics</title>
			</Head>
			<AppContextProvider>
				<Hero title="Comic Closet" />
				<Intro badgeText="New Comics!" titleText="Coming Out Daily" textContent={IntroText} />
				<main className={styles.pageMain}>
					<ComicsListView />
					<FavoritesList />
				</main>
				<Footer />
			</AppContextProvider>
		</div>
	)
}