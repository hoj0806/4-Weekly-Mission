import { instance } from "./axiosInstance";

const sendSignInRequest = async (email: string, password: string) => {
  try {
    const response = await instance.post(
      "/auth/sign-in",
      {
        email: email,
        password: password,
      },
      {
        headers: {
          accept: "*/*",
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  } catch (error) {
    console.error("Error during sign-in:", error);
    throw error;
  }
};

export default sendSignInRequest;
