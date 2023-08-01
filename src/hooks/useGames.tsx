import { useState, useEffect } from "react";
import ApiClient from "../services/ApiClient";
import { CanceledError } from "axios";

export interface Platforms {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platforms }[];
  metacritic: number;
}

interface GameResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGame] = useState<Game[]>([]);
  const [errors, setError] = useState("");
  const [isloading, setIsloading] = useState(false);

  useEffect(() => {
    setIsloading(true);
    const controller = new AbortController();
    ApiClient.get<GameResponse>("/games", { signal: controller.signal })
      .then((res) => {
        setGame(res.data.results);
        setIsloading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsloading(false);
      });
    return () => controller.abort();
  }, []);
  return { games, errors, isloading };
};

export default useGames;
