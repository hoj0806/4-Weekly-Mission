import axios from "axios";
import { instance } from "./axiosInstance";

export const getLinksByFolderId = async (folderId: string) => {
  const accessToken = localStorage.getItem("accessToken");

  try {
    const response = await instance.get(
      `https://bootcamp-api.codeit.kr/api/linkbrary/v1/folders/${folderId}/links`,
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

export const addLinkInFolder = async (url: string, folderId: number) => {
  const accessToken = localStorage.getItem("accessToken");

  try {
    const response = await instance.post(
      "https://bootcamp-api.codeit.kr/api/linkbrary/v1/links",
      {
        url: url,
        folderId: folderId,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("error");
    throw error;
  }
};

axios.defaults.withCredentials = true;
