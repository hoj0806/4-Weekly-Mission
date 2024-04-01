import FooterSocialLinkItem from "./FooterSocialLinkItem";
import styles from "./FooterSocialLinkBox.module.css";

interface SocialObject {
  socialServiceName: string;
  socialUrl: string;
  id: number;
  altImageName: string;
}

interface SocialBoxType {
  socialNetworkServices: SocialObject[];
}

const socialNetworkServiceName: SocialBoxType = {
  socialNetworkServices: [
    {
      socialServiceName: "facebook",
      socialUrl: "https://www.facebook.com/",
      id: 0,
      altImageName: "facebook",
    },
    {
      socialServiceName: "twitter",
      socialUrl: "https://www.twitter.com/",
      id: 1,
      altImageName: "twitter",
    },
    {
      socialServiceName: "youtube",
      socialUrl: "https:/www.youtube.com/",
      id: 2,
      altImageName: "youtube",
    },
    {
      socialServiceName: "instagram",
      socialUrl: "https://www.instagram.com/",
      id: 3,
      altImageName: "instagram",
    },
  ],
};

function FooterSocialLinkBox() {
  return (
    <ul className={styles["social-icon-wrapper"]}>
      {socialNetworkServiceName.socialNetworkServices.map(
        (socialNetWorkServiceInfo) => {
          return (
            <FooterSocialLinkItem
              {...socialNetWorkServiceInfo}
              key={socialNetWorkServiceInfo.id}
            />
          );
        }
      )}
    </ul>
  );
}

export default FooterSocialLinkBox;
