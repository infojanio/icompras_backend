interface ICreateStoreDTO {
  id?: string;
  slug?: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  service_day: string;
  service_hour: string;
  banner_id?: number;
  city_id: number;
  address_id: number;
  active: boolean;
}
export { ICreateStoreDTO };

//git dev
