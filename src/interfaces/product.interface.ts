export interface IProduct {
  id: string;
  name: string;
  permalink: string;
  image: string;
  description: string;
  tags: string[];
  formatted_price: string;
  free: boolean;
  url: string;
}
