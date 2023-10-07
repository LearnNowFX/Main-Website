import { IconButton } from "@mui/material";
import React from "react";
import { SOCIAL_PLATFORMS } from "src/constants/social-media.constants";
import { useStyles } from "./social-media.style";

const SocialMedia = () => {
  const styles = useStyles();

  const openLink = (link: string) => {
    if (link) {
      window.location.replace(link);
    }
  };

  return (
    <div style={styles.container}>
      {SOCIAL_PLATFORMS.map(item => {
        return (
          <IconButton key={item.label} onClick={() => openLink(item.link)} style={styles.button}>
            {<item.icon style={styles.icon} />}
          </IconButton>
        );
      })}
    </div>
  );
};

export default React.memo(SocialMedia);
