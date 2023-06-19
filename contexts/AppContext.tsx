import { createContext, useContext, useEffect, useState } from 'react';

type AppContextProps = {
	children: React.ReactNode
}

const AppContext = createContext({
	favorites: {},
	toggleFavorite: ({}) => {},
	filter: {},
	setFilter: ({}) => {}
})

export default function AppContextProvider({children} : AppContextProps) {
	const [favorites, setFavorites] = useState({});
	const [filter, setFilter] = useState({});
	const [loaded, setLoaded] = useState(false);
	
	const addFavorite = (item:any) => {
		if(Object.keys(favorites).length === 10) return;
		setFavorites((currentList) => {
			return { ...currentList, [item.id]: item };
		});
	}
	
	const deleteFavorite = (itemId:number) => {
		setFavorites((currentList:any) => {
			delete currentList[itemId];
			
			return { ...currentList };
		});
	}
	
	const toggleFavorite = (item:any) => {
		if(!(item.id in favorites)) {
			addFavorite(item);
		} else {
			deleteFavorite(item.id);
		}
	}
	
	const state = {
		favorites,
		toggleFavorite,
		filter,
		setFilter
	}
	
	return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
}

export function useAppContext() {
	return useContext(AppContext);
}