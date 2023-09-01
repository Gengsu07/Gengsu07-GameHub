import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/ApiClient";
import platforms from "../data/platforms";
import ms from "ms";

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
    staleTime: ms('24h'),
    initialData: platforms
  });

export default usePlatform;
