import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import { useStyles } from "./landing-section.style";
import { LANDING_MOCK } from "src/mock/landing.mock";

const LandingSection = () => {
  const styles = useStyles();
  const [data, setData] = useState(LANDING_MOCK);

  const goToLink = (link: string) => {
    window.location.href = link;
  };

  return (
    <div style={styles.container}>
      <video autoPlay id="background-video" loop muted poster={data.image}>
        <source src={data.video} type="video/mp4" />
      </video>
      <div style={styles.info}>
        <Typography style={styles.title}>{data.title}</Typography>
        <Typography style={styles.subtitle}>{data.subtitle}</Typography>
        <div style={styles.buttonContainer}>
          <Button style={styles.button} onClick={() => goToLink(data.link)}>
            {data.action}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(LandingSection);
