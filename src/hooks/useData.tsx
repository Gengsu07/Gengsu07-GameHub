import { useEffect, useState } from "react";
import ApiClient from "../services/ApiClient";
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T,>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [errors, setError] = useState("");
  const [isloading, setIsloading] = useState(false);

  useEffect(
    () => {
      setIsloading(true);
      const controller = new AbortController();
      ApiClient.get<FetchResponse<T>>(endpoint, {
        signal: controller.signal,
        ...requestConfig,
      })
        .then((res) => {
          setData(res.data.results);
          setIsloading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setIsloading(false);
        });
      return () => controller.abort();
    },
    deps ? [...deps] : []
  );
  return { data, errors, isloading };
};

export default useData;
