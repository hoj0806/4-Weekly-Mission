"use client";

import styles from "./Profile.module.css";
import { useQuery } from "@tanstack/react-query";
import { getUserInfo } from "@/api/user";
import { getFolderById } from "@/api/folders";
const Profile = ({ params }: { folderId: number }) => {
  const { data } = useQuery({
    queryKey: ["users"],
    queryFn: () => getUserInfo(),
  });

  const { data: folderData } = useQuery({
    queryKey: ["folder"],
    queryFn: () => getFolderById(params.folderId),
  });

  console.log(folderData);

  return (
    <div className={styles["profile-wrapper"]}>
      <div className={styles["profile-inside-wrapper"]}>
        {data?.map((i) => {
          return (
            <div className={styles["profile-name-wrapper"]} key={i.id}>
              <img
                className={styles["profile-avatar-image"]}
                src={i.image_source}
                alt='profile_avatar_image'
              />
              <div className={styles["profile-name"]}>{i.name}</div>
            </div>
          );
        })}

        {folderData?.map((i) => {
          return (
            <p className={styles["folder-name"]} key={i.id}>
              {i.name}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Profile;
