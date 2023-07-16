import { Double } from 'typeorm';
import { Specification } from '../infra/typeorm/entities/Specification';

interface ICreateProductDTO {
  id?: string;
  name: string;
  price: number;
  quantity: number;
  available: boolean;
  subcategory_id: string;
  company_id: string;
  tenant_id: string;
  image: string;
  //specifications?: Specification[];
}

export { ICreateProductDTO };
