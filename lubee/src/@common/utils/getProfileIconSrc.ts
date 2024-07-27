import { profileIconsData } from "@common/core/profileIconsData";
import { XIc } from "assets";

const getProfileIconSrc = (account: string, emoji: string) => {
  const accountData = profileIconsData.find((data) => data.account === account);
  if (accountData) {
    const iconData = accountData.profileIcon.find((icon) => icon.emoji === emoji);
    return iconData ? iconData.iconSrc : XIc;
  }
  return XIc;
};

export default getProfileIconSrc;
