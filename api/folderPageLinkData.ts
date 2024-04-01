const folderPageLinkDataUrl =
  "https://bootcamp-api.codeit.kr/api/users/3/links";

interface FolderDesc {
  id: number;
  created_at: string;
  updated_at: null;
  url: string;
  title: string;
  description: string;
  image_source: string;
  folder_id: number;
}

export interface FolderIdData {
  data: FolderDesc[];
}

export const getFolderPageLinkData = async () => {
  const response = await fetch(folderPageLinkDataUrl);
  const json: FolderIdData = await response.json();
  return json;
};
