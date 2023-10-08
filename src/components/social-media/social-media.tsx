import React from "react";
import { IconButton } from "@mui/material";
import { useStyles } from "./social-media.style";
import { SOCIAL_PLATFORMS } from "src/constants/social-media.constants";

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
