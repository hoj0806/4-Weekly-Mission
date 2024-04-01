import { getFolderPageLinkData } from "@/api/folderPageLinkData";
import { ReactNode, ReactElement } from "react";
import React from "react";
import { FolderIdData } from "@/api/folderPageLinkData";
import FolderPageMain from "../folderPage/FolderPageMain/FolderPageMain";
interface ServerSideFetchingProps {
  children: ReactElement<any, any>;
}
const ServerSideFetching = async ({ children }: ServerSideFetchingProps) => {
  const linkData: FolderIdData = await getFolderPageLinkData();
  return <div>{React.cloneElement(children, { color: "red" })}</div>;
};

export default ServerSideFetching;
