import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { PlayArrow } from "@mui/icons-material";

const heroStyle: React.CSSProperties = {
  backgroundImage: `url('/assets/Poster.png')`,
  backgroundColor: 'rgb(17, 17, 72)',
  backgroundSize: "cover",
  backgroundPosition: "bottom center",
  backgroundRepeat: "no-repeat",
  height: "90vh",
  position: "absolute",
  width: "100%",
  top: 0,
  zIndex: -10,
  display: "flex",
  alignItems: "center",
  color: "white",
  padding: "0 20%",
};

const Hero = () => {
  return (
    <Box sx={heroStyle}>
      <Box>
        <Typography variant="h4" gutterBottom>
          John Wick 3: <br /> Parabellum
        </Typography>
        <Typography variant="caption">
          John Wick is on the run after killing a member <br/> of the international
          assassins' guild, and with <br/> a $14million price tag on his head, he is
          the <br/> target of hit men and women everywhere...
        </Typography> 
        <br />
        <br />
        <Button variant="contained" color='error' startIcon={<PlayArrow/>}> Watch Trailer</Button>
      </Box>
    </Box>
  );
};

export default Hero;
