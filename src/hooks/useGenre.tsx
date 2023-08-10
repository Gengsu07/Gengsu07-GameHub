// import useData from "./useData";
import genres from "../data/genres.json";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenre = () => {
  const { data, isloading, errors } = {
    data: genres,
    isloading: false,
    errors: false,
  }; //coba pakai static data karena genres kan listnya akan jarang berubah jadi drpd loading nge fetch terus
  // const { data, isloading, errors } = useData<Genre>("/genres");
  return { data, isloading, errors };
};

export default useGenre;
