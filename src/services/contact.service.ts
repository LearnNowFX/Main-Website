import axios, { AxiosInstance } from "axios";
import { IContactForm } from "src/interfaces/contact-form.interface";

export class ContactService {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: `${import.meta.env.VITE_API_URL}/api/contact`,
    });
  }

  async send(data: IContactForm, token: string): Promise<boolean> {
    const success = await this.api
      .post("/", data, { headers: { "X-Recaptcha-Token": token } })
      .then(() => true)
      .catch(err => {
        console.log(err);
        return false;
      });

    return Boolean(success);
  }
}

export const contactService = new ContactService();
