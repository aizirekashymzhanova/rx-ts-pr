import { IProduct } from "./intProduct";
export interface ICart {
  product: IProduct[];
  totalPrice: number;
}
