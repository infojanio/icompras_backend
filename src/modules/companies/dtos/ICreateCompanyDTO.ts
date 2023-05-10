interface ICreateCompanyDTO {
  id?: string;
  name: string;
  slug?: string;
  email: string;
  cnpj: string;
  phone: string;
  isActive: boolean;
  isAdmin: boolean;
  address_id: string;
  banner_id: string;
  openinghours_id: string;
}
export { ICreateCompanyDTO };

//git dev
