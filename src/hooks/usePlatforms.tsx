// import useData from "./useData";

import { useQuery } from "@tanstack/react-query";
import platform_data from "../data/platform.json";
import ApiClient, { FetchResponse } from "../services/ApiClient";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatform = () =>
  useQuery({
    queryKey: ["platform"],
    queryFn: () =>
      ApiClient.get<FetchResponse<Platform>>("/platforms/lists/parents").then(
        (res) => res.data
      ),
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: platform_data.length, results: platform_data },
  });
// const usePlatform = () => useData<Platform>("/platforms/lists/parents");

export default usePlatform;
