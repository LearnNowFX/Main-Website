import React, { FC, useState } from "react";
import { Button, Typography } from "@mui/material";
import { useStyles } from "./landing-section.style";
import { LANDING_MOCK } from "src/mock/landing.mock";
import { useDeviceContext } from "src/context/device.context";
import { ILandingSectionData } from "src/interfaces/landing-section.interface";

const Background: FC<{ data: ILandingSectionData }> = ({ data }) => {
  const { isMobile } = useDeviceContext();

  if (isMobile) {
    return (
      <div
        style={{
          backgroundImage: `url(${data.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          width: "100%",
        }}
      />
    );
  }

  return (
    <video autoPlay id="background-video" loop muted poster={data.image} style={{ width: "100%" }}>
      <source src={data.video} type="video/mp4" />
    </video>
  );
};

const LandingSection = () => {
  const styles = useStyles();
  const [data, setData] = useState(LANDING_MOCK);

  const goToLink = (link: string) => {
    window.location.href = link;
  };

  return (
    <div style={styles.container}>
      <Background data={data} />
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
