interface ICreateAddressDTO {
  district: string;
  street: string;
  complement?: string;
  longitude?: number;
  latitude?: number;

  city_id: string;
}
export { ICreateAddressDTO };
