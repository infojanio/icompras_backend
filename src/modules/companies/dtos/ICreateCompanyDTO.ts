interface ICreateCompanyDTO {
  name: string;
  slug: string;
  email: string;
  cnpj?: string;
  phone?: string;
  isActive: boolean;
  address_id: string;
  banner_id?: string;
  openinghours_id: string;
  tenant_id: string;
}
export { ICreateCompanyDTO };

//git dev
