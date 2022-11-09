import axios from "axios";
import { StarshipItem } from "@/types/starship";

const API = axios.create({
  baseURL: "https://swapi.dev/api",
  headers: {
    "Content-type": "application/json",
  },
});

export const getStarships = async (
  currentPage: number
): Promise<StarshipItem[]> => {
  try {
    return (await API.get("/starships/", { params: { page: currentPage } }))
      .data.results;
  } catch (error) {
    return Promise.resolve([]);
  }
};

export const getStarship = async (id: Number): Promise<StarshipItem> => {
  return await API.get(`/starships/${id}/`);
};
