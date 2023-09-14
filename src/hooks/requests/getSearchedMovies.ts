import { useQuery } from "@tanstack/react-query";
import { client } from "../../axios-config";

const params = (query: string) => ({
  language: "en-US",
  page: 1,
  query,
});

const getSearchedMovies = async (query: string) => {
  const resp = await client({ url: "/search/movie", params: params(query) });
  return resp.data;
};

export const useGetSearchedMovies = (query: string) =>
  useQuery<MovieAPIData>({
    queryKey: ["movies", query],
    queryFn: () => getSearchedMovies(query),
    enabled: !!query,
  });
