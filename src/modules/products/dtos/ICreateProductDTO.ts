import { Double } from 'typeorm';
import { Specification } from '../infra/typeorm/entities/Specification';

interface ICreateProductDTO {
  id?: string;
  name: string;
  price: Double;
  quantity: Double;
  available: boolean;
  subcategory_id: string;
  company_id: string;
  tenant_id: string;
  //  specifications?: Specification[];
}

export { ICreateProductDTO };
