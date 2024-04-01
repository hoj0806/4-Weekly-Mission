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

export const getLinkFilterData = async (id: number) => {
  const response = await fetch(
    `https://bootcamp-api.codeit.kr/api/users/3/links?folderId=${id}`
  );
  const json: FolderIdData = await response.json();
  return json;
};
