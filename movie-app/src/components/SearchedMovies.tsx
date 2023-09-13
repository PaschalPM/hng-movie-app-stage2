import { useSearchParams } from "react-router-dom";
import { useDeferredValue } from "react";
import { useGetSearchedMovies } from "../hooks/requests/getSearchedMovies";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ErrorFallBack from "./ErrorFallBack";
import MovieCard from "./MovieCard";

const SearchedMovies = () => {
  const [searchParams] = useSearchParams();
  const movieQuery = searchParams.get("q");
  const defferedMovieQuery = useDeferredValue(movieQuery);
  const { data, isLoading, isError } = useGetSearchedMovies(
    defferedMovieQuery as string
  );
  const test = (
    id: number,
    title: string,
    poster_path: string,
    release_date: string
  ) => id && title && poster_path && release_date;

  return movieQuery ? (
    <>
      {isLoading ? (
        <CircularProgress />
      ) : isError ? (
        <ErrorFallBack />
      ) : data.results.length ? (
        <>
          <Typography variant="h5" gutterBottom>
            Searched Movies
          </Typography>
          <Grid container spacing={2}>
            {data.results.slice(0, 10).map(
              ({ id, title, poster_path, release_date }) =>
                test(id, title, poster_path, release_date) && (
                  <Grid item sm={6} md={3} key={id}>
                    <MovieCard
                      id={id}
                      title={title}
                      posterPath={poster_path}
                      releaseDate={release_date}
                    />
                  </Grid>
                )
            )}
          </Grid>
        </>
      ) : (
        <Typography variant="subtitle1" color="error">
          Search result: 0
        </Typography>
      )}
    </>
  ) : (
    ""
  );
};

export default SearchedMovies;
