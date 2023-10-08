import { Button, InputLabel, TextField, Typography } from "@mui/material";
import React from "react";
import { useStyles } from "./contact-form.style";

const ContactForm = () => {
  const styles = useStyles();

  return (
    <div style={styles.container}>
      <Typography>* Indicates required field</Typography>
      <div>
        <InputLabel htmlFor="name">Name *</InputLabel>
        <TextField required id="first_name" label="First Name" style={styles.input} />
        <TextField required id="last_name" label="Last Name" style={styles.input} />
      </div>
      <div>
        <InputLabel htmlFor="email">Email *</InputLabel>
        <TextField required id="email" label="Email" style={styles.input} />
      </div>
      <div>
        <InputLabel htmlFor="message">Message *</InputLabel>
        <TextField required id="message" label="Message" multiline rows={4} style={styles.input} />
      </div>
      <Button style={styles.button}>Submit</Button>
    </div>
  );
};

export default React.memo(ContactForm);
