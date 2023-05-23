interface ICreateCompanyDTO {
  id?: string;
  name: string;
  slug?: string;
  email: string;
  cnpj: string;
  logo?: string;
  phone: string;
  isActive: boolean;
  openinghours_id: string;
  tenant_id: string;
  city_id: string;
}
export { ICreateCompanyDTO };

//git dev
