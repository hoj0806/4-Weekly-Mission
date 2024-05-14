import axios from "axios";
import { instance } from "./axiosInstance";

export const getAllLinks = async () => {
  // 로컬 스토리지에서 엑세스 토큰을 가져옵니다.
  const accessToken = localStorage.getItem("accessToken");

  try {
    const response = await instance.get(
      "https://bootcamp-api.codeit.kr/api/linkbrary/v1/links",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`, // Bearer 토큰 추가
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching links:", error);
    throw error;
  }
};

axios.defaults.withCredentials = true;
