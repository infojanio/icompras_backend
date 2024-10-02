interface ICreateCityDTO {
  name: string;
  uf?: string;
  cep?: string;
  isActive?: boolean;
  tenantId: string;
}
export { ICreateCityDTO };
