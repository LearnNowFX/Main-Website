import ReCAPTCHA from "react-google-recaptcha";
import { useMemo, useRef, useState } from "react";
import { contactService } from "src/services/contact.service";
import { IContactForm } from "src/interfaces/contact-form.interface";

export const useContactForm = () => {
  const captchaRef = useRef<ReCAPTCHA>(null);
  const [captchaChecked, setCaptchaChecked] = useState(false);
  const [form, setForm] = useState<Partial<IContactForm>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  const handleCaptchaChange = () => {
    setCaptchaChecked(true);
  };

  const isValid = useMemo(() => {
    return form.firstName && form.lastName && form.email && form.message && captchaChecked;
  }, [form, captchaChecked]);

  const handleSubmit = async () => {
    if (isValid) {
      const token = captchaRef.current?.getValue();
      const success = await contactService.send(form as IContactForm, token as string);

      if (success) {
        setForm({});
        captchaRef.current?.reset();
      }
    }
  };

  return {
    form,
    isValid,
    captchaRef,
    handleSubmit,
    handleChange,
    handleCaptchaChange,
  };
};
