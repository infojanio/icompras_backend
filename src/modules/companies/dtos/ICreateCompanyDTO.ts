import { Category } from '@modules/products/infra/typeorm/entities/Category';

interface ICreateCompanyDTO {
  id?: string;
  name: string;
  slug?: string;
  email: string;
  cnpj: string;
  logo?: string;
  phone: string;
  city_id: string;
  isActive: boolean;
  openinghours_id: string;
  tenant_id: string;
  categories?: Category[];
}
export { ICreateCompanyDTO };

//git dev
