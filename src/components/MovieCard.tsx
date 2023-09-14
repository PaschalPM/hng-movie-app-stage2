import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "react-router-dom";
import { format } from "../lib/date";
import { movieImageBasePath } from "../axios-config";

type Props = {
  id: number;
  posterPath: string;
  title: string;
  releaseDate: string;
};
console.log(new Date("2023-08-02"));

const MovieCard = ({ id, posterPath, title, releaseDate }: Props) => {
  return (
    <Card data-testid:movie-card>
      <Link to={`/movies/${id}`}>
        <CardMedia
          data-testid:movie-poster
          component={"img"}
          image={movieImageBasePath("w500") + posterPath}
          loading="lazy"
        />
      </Link>
      <CardContent>
        <Link to={`/movies/${id}`}>
          <Typography
            data-testid:movie-title
            variant="subtitle1"
            color={"primary"}
            sx={{
              fontWeight: "700",
              "&:hover": {
                color: "primary.light",
              },
            }}
          >
            {title}
          </Typography>
        </Link>
        <Typography variant="caption" data-testid:movie-release-date>
          {format(releaseDate)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
