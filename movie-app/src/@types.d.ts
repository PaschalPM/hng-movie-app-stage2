type Movie = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null;
  budget: number;
  genres: number[];
  homepage: string;
  id: number;
  imdb_id: string;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  runtime:string;
  release_date: string;
  title: string;
  vote_average: number;
  vote_count: number;
};

type APIData = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};
