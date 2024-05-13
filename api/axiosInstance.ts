import axios from "axios";

export const instance = axios.create({
  baseURL: "https://bootcamp-api.codeit.kr/api/linkbrary/v1",
});

axios.defaults.withCredentials = true;
