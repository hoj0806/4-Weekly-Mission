const SharedPagefolderUrl = "https://bootcamp-api.codeit.kr/api/sample/folder";

interface linkObject {
  createdAt: string;
  description: string;
  id: number;
  imageSource: string;
  title: string;
  url: string;
}

interface OwnerObject {
  id: number;
  name: string;
  profileImageSource: string;
}

interface FolderDataType {
  count: number;
  id: number;
  links: linkObject[];
  name: string;
  owner: OwnerObject;
}

interface SharePageFolderData {
  folder: FolderDataType;
}

export const getSharedPageFolderData = async () => {
  const response = await fetch(SharedPagefolderUrl);
  const json: SharePageFolderData = await response.json();
  return json;
};
