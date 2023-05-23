import { Double } from 'typeorm';
import { Specification } from '../infra/typeorm/entities/Specification';

interface ICreateProductDTO {
  id?: string;
  name: string;
  available: boolean;
  price: Double;
  quantity: Double;
  category_id: string;
  store_id: string;
  specifications?: Specification[];
}

export { ICreateProductDTO };
