import React, { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useStyles } from "./contact-form.style";
import { useContactForm } from "./contact-form.hook";
import { Button, InputLabel, TextField, Typography } from "@mui/material";

const ContactForm = () => {
  const styles = useStyles();
  const { form, isValid, captchaRef, handleSubmit, handleChange, handleCaptchaChange } =
    useContactForm();

  return (
    <div style={styles.container}>
      <Typography>* Indicates required field</Typography>
      <div>
        <InputLabel htmlFor="name">Name *</InputLabel>
        <TextField
          required
          id="firstName"
          label="First Name"
          onChange={handleChange}
          value={form?.firstName || ""}
          style={styles.input}
        />
        <TextField
          required
          id="lastName"
          label="Last Name"
          onChange={handleChange}
          value={form?.lastName || ""}
          style={styles.input}
        />
      </div>
      <div>
        <InputLabel htmlFor="email">Email *</InputLabel>
        <TextField
          required
          id="email"
          label="Email"
          style={styles.input}
          onChange={handleChange}
          value={form?.email || ""}
        />
      </div>
      <div>
        <InputLabel htmlFor="message">Message *</InputLabel>
        <TextField
          required
          id="message"
          label="Message"
          multiline
          rows={4}
          style={styles.input}
          onChange={handleChange}
          value={form?.message || ""}
        />
      </div>
      <div style={styles.captcha}>
        <ReCAPTCHA
          ref={captchaRef}
          onChange={handleCaptchaChange}
          sitekey={import.meta.env.VITE_RECAPTCHA_KEY}
        />
      </div>
      <Button sx={styles.button} disabled={!isValid} onClick={handleSubmit}>
        Send Message
      </Button>
    </div>
  );
};

export default React.memo(ContactForm);
