import { create } from "zustand";

interface GameQuery {
    genreId?: number;
    platformId?: number;
    sortOrder?: string | null;
    searchText?: string | null;
  }
interface GameQueryStore{
    gameQuery : GameQuery,
    setPlatfomId : (platfomId:number) => void,
    setGenreId : (genreId:number) => void,
    setSearchText : (searchText:string)=>void,
    setSortOrder: (sortOrder:string) => void,
}

const useGameQueryStore = create<GameQueryStore>(set => ({
    gameQuery: {},
    setGenreId: (genreId) => set(store =>({gameQuery:{...store.gameQuery, genreId:genreId}})),
    setPlatfomId: (platformId)=> set(store =>({
        gameQuery:{...store.gameQuery, platformId:platformId},
    })),
    setSearchText : (searchText) => set(()=>({gameQuery:{searchText}})),
    setSortOrder: (sortOrder) => set(store =>({gameQuery:{...store.gameQuery,sortOrder:sortOrder}}))
}))
export default useGameQueryStore;