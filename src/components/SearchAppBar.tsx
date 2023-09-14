import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Movie from "@mui/icons-material/Movie";
import { useNavigate, useSearchParams } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

type Props = {
  title: string;
  transparent?: boolean;
  withSearchBar?: boolean;
};
export default function SearchAppBar({
  title,
  transparent,
  withSearchBar,
}: Props) {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams()

  const searchTerm = searchParams.get('q')
  const updateSearchTerm = (q:string) => {
    setSearchParams({q})
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{
          backgroundColor: `${transparent ? "transparent" : ""}`,
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{
              mr: 2,
              "&:hover": { cursor: "pointer" },
              "&:active": { scale: "0.95" },
            }}
            onClick={() => navigate("/")}
          >
            <Movie />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              transformOrigin: "left",
              display: {
                xs: "none",
                sm: "block",
              },
              "&:hover": { cursor: "pointer" },
              "&:active": { scale: "0.95" },
            }}
            onClick={() => navigate("/")}
          >
            {title}
          </Typography>
          {withSearchBar ? (
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                value={searchTerm || ''}
                onChange={(ev) => updateSearchTerm(ev.target.value)}
              />
            </Search>
          ) : (
            ""
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
