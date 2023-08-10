// import useData from "./useData";

import platform_data from "../data/platform.json";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatform = () => ({ data: platform_data, errors: false });
// const usePlatform = () => useData<Platform>("/platforms/lists/parents");

export default usePlatform;
