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
        <img
          src={`/assets/images/${socialServiceName}_icon.svg`}
          alt={`${altImageName}_icon_image`}
        ></img>
      </a>
    </li>
  );
};

export default FooterSocialLinkItem;
