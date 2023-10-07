import { Email, Facebook, Twitter, YouTube } from "@mui/icons-material";
import { ISocialPlatform } from "src/interfaces/social-platform.interface";

export const SOCIAL_PLATFORMS: ISocialPlatform[] = [
  {
    icon: Email,
    label: "email",
    link: import.meta.env.EMAIL_ADDRESS,
  },
  {
    icon: YouTube,
    label: "YouTube",
    link: import.meta.env.YOUTUBE_CHANNEL,
  },
  {
    icon: Facebook,
    label: "Facebook",
    link: import.meta.env.FACEBOOK_LINK,
  },
  {
    icon: Twitter,
    label: "Twitter",
    link: import.meta.env.TWITTER_LINK,
  },
];
