// import useData from "./useData";
import { useQuery } from "@tanstack/react-query";
import ApiClient, { FetchResponse } from "../services/ApiClient";
import genres from "../data/genres.json";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
const useGenre = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["genre"],
    queryFn: () =>
      ApiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: { count: genres.length, results: genres },
  });
  return { data, isLoading, error };
};

export default useGenre;
