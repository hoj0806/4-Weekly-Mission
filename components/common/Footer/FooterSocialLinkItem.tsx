import Image from "next/image";

interface FooterSocialLinkItemProps {
  socialServiceName: string;
  socialUrl: string;
  altImageName: string;
}

const FooterSocialLinkItem = ({
  socialServiceName,
  socialUrl,
  altImageName,
}: FooterSocialLinkItemProps) => {
  return (
    <li>
      <a href={socialUrl}>
        <Image
          src={`/assets/images/${socialServiceName}_icon.svg`}
          alt={`${altImageName}_icon_image`}
          width='20'
          height='20'
        />
      </a>
    </li>
  );
};

export default FooterSocialLinkItem;
