import { useParams } from "react-router-dom";
import { useGetMovieDetails } from "../hooks/requests/getMovies";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import { movieImageBasePath } from "../lib/requests";
import { UTCString } from "../lib/date";

const SingleMovie = () => {
  const { id } = useParams();
  const { loading, movieDetails } = useGetMovieDetails(id as string);


  if (loading) {
    return <CircularProgress />;
  }
  return (
    <Container>
      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems="center"
        spacing={{ xs: 1, md: 5 }}
        sx={{ height: "85vh", margin: "0 20vh" }}
      >
        <Box
          sx={{
            flexGrow: 1,
            height: "100%",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <img
            src={movieImageBasePath("w500") + movieDetails.poster_path}
            alt={movieDetails.title}
            height={"90%"}
          />
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h4" gutterBottom data-testid:movie-title>
            {movieDetails.title}
          </Typography>
          <Typography data-testid:movie-release-date>
            {movieDetails.release_date}
          </Typography>
          <Typography data-testid:movie-runtime gutterBottom>
            {movieDetails.runtime && UTCString(movieDetails.runtime)}
          </Typography>
          <Typography variant="h5">Overview</Typography>
          <Typography variant="body2" data-testid:movie-overview>
            {movieDetails.overview}
          </Typography>
        </Box>
      </Stack>
    </Container>
  );
};

export default SingleMovie;
