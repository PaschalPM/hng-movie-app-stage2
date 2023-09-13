import Hero from "../components/Hero";
import Container from "@mui/material/Container";
import TopRatedMovies from "../components/TopRatedMovies";
import SearchedMovies from "../components/SearchedMovies";

const AllMovies = () => {
  return (
    <>
      <Hero />
      <Container
        sx={{
          marginTop: "80vh",
        }}
      >
        <SearchedMovies />
        <TopRatedMovies />
      </Container>
    </>
  );
};

export default AllMovies;
