// import useData from "./useData";
import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/ApiClient";
import genres from "../data/genres";


const apiClient = new APIClient<Genre>("/genres");
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenre = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: genres,
  });

export default useGenre;
