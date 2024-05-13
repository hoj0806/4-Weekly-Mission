import axios from "axios";
import { instance } from "./axiosInstance";

export const getAllFolders = async () => {
  const accessToken = localStorage.getItem("accessToken");
  try {
    const response = await instance.get(
      "https://bootcamp-api.codeit.kr/api/linkbrary/v1/folders",
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

export const addFolder = async (folderName: string) => {
  const accessToken = localStorage.getItem("accessToken");
  try {
    const response = await instance.post(
      "https://bootcamp-api.codeit.kr/api/linkbrary/v1/folders",
      {
        name: folderName,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`, // Bearer 토큰 추가
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("error");
    throw error;
  }
};

export const deleteFolder = async (folderId: number) => {
  const accessToken = localStorage.getItem("accessToken");

  try {
    const response = await instance.delete(
      `https://bootcamp-api.codeit.kr/api/linkbrary/v1/folders/${folderId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
  } catch (error) {
    console.error("error");
    throw error;
  }
};

export const renameFolder = async (folderName: string, folderId: number) => {
  const accessToken = localStorage.getItem("accessToken");

  try {
    const response = await instance.put(
      `https://bootcamp-api.codeit.kr/api/linkbrary/v1/folders/${folderId}`,
      {
        name: folderName,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
  } catch (error) {
    console.error("error");
    throw error;
  }
};
axios.defaults.withCredentials = true;
