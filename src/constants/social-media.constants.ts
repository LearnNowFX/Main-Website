import { Email, YouTube } from "@mui/icons-material";
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
];
