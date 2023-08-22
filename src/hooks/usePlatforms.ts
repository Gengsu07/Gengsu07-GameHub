// import useData from "./useData";

import { useQuery } from "@tanstack/react-query";
import platform_data from "../data/platform.json";
import APIClient from "../services/ApiClient";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const apiClient = new APIClient<Platform>("/platforms/lists/parents");
const usePlatform = () =>
  useQuery({
    queryKey: ["platform"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    // initialData: { count: platform_data.length, results: platform_data },
  });

export default usePlatform;
