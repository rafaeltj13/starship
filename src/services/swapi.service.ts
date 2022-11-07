import axios from "axios";
import { StarshipItem } from "../types/starship";

const API = axios.create({
  baseURL: "https://swapi.dev/api",
  headers: {
    "Content-type": "application/json",
  },
});

export const getStarships = async (): Promise<StarshipItem[]> => {
  return (await API.get("/starships/")).data;
};

export const getStarship = async (id: Number): Promise<StarshipItem> => {
  return await API.get(`/starships/${id}/`);
};
