import axios, { AxiosRequestConfig } from "axios";
export const baseURL = "https://api.themoviedb.org/3";

const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NjA1ZjRhZjY5ZTA0MTI3NWQ4OGY2YWU0N2ViMTkzYiIsInN1YiI6IjY1MDAyZTk5ZGI0ZWQ2MTAzODU1ZDhiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Z7wO23KCy2dglMwluumyIinPi_uywdAuicfI4YYXN-o";

const axiosInstance = axios.create({
  baseURL,
});

axiosInstance.defaults.headers.common[
  "Authorization"
] = `Bearer ${ACCESS_TOKEN}`;

export const movieImageBasePath = (size: "original" | "w500") =>
  `https://image.tmdb.org/t/p/${size}`;

export const client = async (obj: AxiosRequestConfig = {}) => {
  return axiosInstance(obj);
};
