import { AxiosResponse, isAxiosError } from "axios";
import { client, api_key } from "../axios-config";
const params = {
  api_key,
  language: "en-US",
  page: 1,
};
export const movieImageBasePath = (size: "original" | "w500") =>
  `https://image.tmdb.org/t/p/${size}`;

export const getPopularMovies = async (
  onSuccess?: (resp: AxiosResponse<APIData>) => void,
  onError?: (err: string) => void
) => {
  try {
    const resp = await client({ url: "/movie/popular", params });
    onSuccess && onSuccess(resp);
  } catch (e) {
    if (isAxiosError(e)) {
      onError && onError(e.message);
    }
  }
};

export const getMovie = async (movieId: number) => {
  return await client({ url: `/movie/${movieId}`, params });
};

export const getMovieDetails = async (
  movieId: number | string,
  onSuccess?: (resp: AxiosResponse<Movie>) => void,
  onError?: (err: string) => void
) => {
  try {
    const resp = await client({ url: `/movie/${movieId}`, params });
    onSuccess && onSuccess(resp);
  } catch (e) {
    if (isAxiosError(e)) {
      onError && onError(e.message);
    }
  }
};
