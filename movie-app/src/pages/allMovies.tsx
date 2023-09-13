import Hero from "../components/Hero";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TopRatedMovies from "../components/TopRatedMovies";
import SearchedMovies from "../components/SearchedMovies";

const AllMovies = () => {
  return (
    <Box sx={{position:'absolute', zIndex:-1, top:0, width:'100%'}}>
      <Hero />
      <Container
      >
        <SearchedMovies />
        <TopRatedMovies />
      </Container>
    </Box>
  );
};

export default AllMovies;
