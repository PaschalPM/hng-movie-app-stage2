import { useQuery } from "@tanstack/react-query";
import { client } from "../../axios-config";

const params = {
  language: "en-US",
  page: 1,
};

const getTopRatedMovies = async () => {
  const resp = await client({ url: "/movie/top_rated", params });
  return resp.data;
};

export const useGetTopRatedMovies = () =>
  useQuery<MovieAPIData>({
    queryKey: ["movies"],
    queryFn: getTopRatedMovies,
  });
