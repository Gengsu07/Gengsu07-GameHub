import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { key: "4ce3012ed2024e39861c8d0811fe28d3" },
});
