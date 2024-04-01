const folderUrl = "https://bootcamp-api.codeit.kr/api/users/3/folders";

interface FolderObjectType {
  id: number;
  created_at: string;
  name: string;
  user_id: number;
  favorite: boolean;
  link: { count: number };
}

export interface FolderDataType {
  data: FolderObjectType[];
}

export const getFolderData = async () => {
  const response = await fetch(folderUrl);
  const json: FolderDataType = await response.json();
  return json;
};
