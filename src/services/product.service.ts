import axios, { AxiosInstance } from "axios";
import { IProduct } from "src/interfaces/product.interface";

export class ProductService {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: `${import.meta.env.VITE_API_URL}/api/products`,
    });
  }

  async getAll(): Promise<IProduct[]> {
    return await this.api
      .get("/")
      .then(res => res.data)
      .catch(err => {
        console.log(err);
        return [];
      });
  }
}

export const productService = new ProductService();
