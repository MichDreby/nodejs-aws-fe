import * as Yup from 'yup';

export type Product = {
  id: string,
  title: string,
  description: string,
  price: number,
};

export type Flat = {
  id: string,
  address: string,
  area: number,
  city: string,
  district: string,
  price: number
  rooms: number
};

export const ProductSchema = Yup.object().shape({
  title: Yup.string().required(),
  description: Yup.string(),
  price: Yup.number().required(),
});
