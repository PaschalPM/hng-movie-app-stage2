import axios, { AxiosRequestConfig } from "axios";
export const baseURL = "https://api.themoviedb.org/3"

const axiosInstance = axios.create({
  baseURL
});

export const api_key = "9605f4af69e041275d88f6ae47eb193b";
export const client = async (obj: AxiosRequestConfig = {}) => {
  return axiosInstance(obj);
};