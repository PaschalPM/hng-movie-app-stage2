import { useEffect, useState } from "react";
import {
  getMovie,
  getMovieDetails,
  getPopularMovies,
} from "../../lib/requests";
import axios from "axios";

export const useGetMovies = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([] as Movie[]);
  const [error, setError] = useState("");

  useEffect(() => {
    getPopularMovies(
      (resp) => {
        const axiosFirstMovies: ({ data: Movie } | Promise<{ data: Movie }>)[] =
          [];
        setLoading(true);
        resp.data.results.map(({ id }) => {
          axiosFirstMovies.push(
            getMovie(id) as unknown as Promise<{ data: Movie }>
          );
        });
        axios.all<{ data: Movie }>(axiosFirstMovies).then((apiData) => {
          const movies = apiData.map((apiDatum) => apiDatum.data);
          setLoading(false);
          setMovies(movies);
        });
      },
      (error) => {
        setLoading(false);
        setError(error);
      }
    );
  }, []);

  return { loading, movies, error };
};

export const useGetMovieDetails = (id: string) => {
  const [loading, setLoading] = useState(false);
  const [movieDetails, setMovieDetails] = useState({} as Movie);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    getMovieDetails(
      id,
      (resp) => {
        setLoading(false);
        setMovieDetails(resp.data);
      },
      (err) => {
        setLoading(false);
        setError(err);
      }
    );
  }, [id]);

  return {loading, movieDetails, error}
};
