import { useEffect, useState } from "react";
import ApiClient from "../services/ApiClient";
import { CanceledError } from "axios";

interface Genre {
  id: number;
  name: string;
}

interface GenreResponseList {
  count: number;
  results: Genre[];
}

const useGenre = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [errors, setError] = useState("");
  const [isloading, setIsloading] = useState(false);

  useEffect(() => {
    setIsloading(true);
    const controller = new AbortController();
    ApiClient.get<GenreResponseList>("/genres", { signal: controller.signal })
      .then((res) => {
        setGenres(res.data.results);
        setIsloading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsloading(false);
      });
    return () => controller.abort();
  }, []);
  return { genres, errors, isloading };
};

export default useGenre;
