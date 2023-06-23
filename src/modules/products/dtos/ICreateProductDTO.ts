import { Specification } from '../infra/typeorm/entities/Specification';

interface ICreateProductDTO {
  id?: string;
  name: string;
  price: number;
  available: boolean;
  quantity: number;
  subcategory_id: string;
  company_id: string;
  specifications?: Specification[];
}

export { ICreateProductDTO };
