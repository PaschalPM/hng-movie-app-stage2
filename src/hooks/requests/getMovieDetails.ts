import { useQuery } from "@tanstack/react-query";
import { client } from "../../axios-config";

const params = {
  language: "en-US",
};

const getMovieDetails = async (movieId: number) => {
  const resp = await client({ url: `/movie/${movieId}`, params });
  return resp.data;
};

export const useGetMovieDetails = (movieId:number) =>
  useQuery({
    queryKey: ["movies", movieId],
    queryFn: () => getMovieDetails(movieId),
  });