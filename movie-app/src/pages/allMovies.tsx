import { useGetMovies } from "../hooks/requests/getMovies";
import Hero from "../components/Hero";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import MovieCard from "../components/MovieCard";

const AllMovies = () => {
  const { loading, movies } = useGetMovies();
  console.log(movies);
  return (
    <>
      <Hero />
      <Container
        sx={{
          marginTop: "80vh",
        }}
      >
        {loading ? (
          <CircularProgress />
        ) : (
          <>
            <Typography variant='h5' gutterBottom>Popular</Typography>
            <Grid container spacing={2}>
              {movies
                .slice(0, 10)
                .map(({ imdb_id, title, poster_path, release_date }) => (
                  <Grid item sm={6} md={3} key={imdb_id}>
                    <MovieCard
                      id={imdb_id}
                      title={title}
                      posterPath={poster_path}
                      releaseDate={release_date}
                    />
                  </Grid>
                ))}
            </Grid>
          </>
        )}
      </Container>
    </>
  );
};

export default AllMovies;
