const userDataUrl = "https://bootcamp-api.codeit.kr/api/users/1";

interface UserInformation {
  id: number;
  created_at: string;
  name: string;
  image_source: string;
  email: string;
  auth_id: string;
}
interface UserDataType {
  data: UserInformation[];
}

export const getUserData = async () => {
  const response = await fetch(userDataUrl);
  const json: UserDataType = await response.json();
  return json.data[0];
};
