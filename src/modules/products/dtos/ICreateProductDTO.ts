import { Specification } from '../infra/typeorm/entities/Specification';

interface ICreateProductDTO {
  id?: string;
  name: string;
  price: number;
<<<<<<< HEAD
  available: boolean;
  quantity: number;
  subcategory_id: string;
  company_id: string;
  specifications?: Specification[];
=======
  quantity: number;
  available: boolean;
  subcategory_id: string;
  company_id: string;
  tenant_id: string;
  //specifications?: Specification[];
>>>>>>> dev
}

export { ICreateProductDTO };
