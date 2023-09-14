import { useGetTopRatedMovies } from "../hooks/requests/getTopRatedMovies";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import MovieCard from "./MovieCard";
import ErrorFallBack from "./ErrorFallBack";

const TopRatedMovies = () => {
  const { isLoading, data, isError } = useGetTopRatedMovies();

  return (
    <>
      {isLoading ? (
        <CircularProgress />
      ) : isError ? (
        <ErrorFallBack />
      ) : (
        <>
          <Typography variant="h5" mt={3} gutterBottom>
            Top Rated Movies
          </Typography>
          <Grid container spacing={2}>
            {data.results
              .slice(0, 10)
              .map(({ id, title, poster_path, release_date }) => (
                <Grid item sm={6} md={3} key={id}>
                  <MovieCard
                    id={id}
                    title={title}
                    posterPath={poster_path}
                    releaseDate={release_date}
                  />
                </Grid>
              ))}
          </Grid>
        </>
      )}
    </>
  );
};
export default TopRatedMovies;
