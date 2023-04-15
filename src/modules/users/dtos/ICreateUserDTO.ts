interface ICreateUserDTO {
  id: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  avatar?: string;
  //city_id: string;
  cep?: number;
  district: string;
  street: string;
  complement?: string;
  longitude?: number;
  latitude?: number;
  isActive: boolean;
  isAdmin: boolean;
}
export { ICreateUserDTO };

//git dev
