import {Flat, Product} from "models/Product";

export type CartItem = {
  product: Flat,
  count: number,
};