import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenre = () => {
  const { data, isloading, errors } = useData<Genre>("/genres");
  return { data, isloading, errors };
};

export default useGenre;
