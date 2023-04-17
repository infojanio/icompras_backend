interface ICreateUserDTO {
  name: string;
  email: string;
  phone: string;
  password: string;
  avatar?: string;
  isActive: boolean;
  isAdmin: boolean;
  address_id: string;
}
export { ICreateUserDTO };

/* table address

  city_id: string;
  cep?: number;
  district: string;
  street: string;
  complement?: string;
  longitude?: number;
  latitude?: number;
*/
