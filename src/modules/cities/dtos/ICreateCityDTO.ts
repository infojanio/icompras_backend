interface ICreateCityDTO {
  name: string;
  uf?: string;
  cep?: string;
  longitude?: number;
  latitude?: number;
  isActive?: boolean;
}
export { ICreateCityDTO };
