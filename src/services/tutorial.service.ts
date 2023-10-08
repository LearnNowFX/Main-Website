import axios, { AxiosInstance } from "axios";
import { IVideoDetails } from "src/interfaces/video-details.interface";

export class TutorialService {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: `${import.meta.env.VITE_API_URL}/api/tutorials`,
    });
  }

  async getAll(): Promise<IVideoDetails[]> {
    return await this.api
      .get("/")
      .then(res => res.data)
      .catch(err => {
        console.log(err);
        return [];
      });
  }
}

export const tutorialService = new TutorialService();
