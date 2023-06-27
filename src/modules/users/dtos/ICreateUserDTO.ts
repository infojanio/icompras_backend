interface ICreateUserDTO {
  id?: string;
  name: string;
  email: string;
  phone: string;
  password: string;
  avatar?: string;
  type?: string;
  isActive?: boolean;
  isAdmin?: boolean;
}
export { ICreateUserDTO };
