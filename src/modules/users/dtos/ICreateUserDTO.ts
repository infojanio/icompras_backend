interface ICreateUserDTO {
  name: string;
  email: string;
  phone: string;
  password: string;
  avatar?: string;
  isActive: boolean;
  isAdmin: boolean;
  address_id: string;

  id?: string;
}
export { ICreateUserDTO };
