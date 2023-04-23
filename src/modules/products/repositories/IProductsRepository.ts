import { ICreateProductDTO } from '@modules/products/dtos/ICreateProductDTO';
import { Product } from '@modules/products/infra/typeorm/entities/Product';

interface IProductsRepository {
  create(data: ICreateProductDTO): Promise<Product>;

  //findByLicensePlate(license_plate: string): Promise<Product | undefined>;

  findAvailable(
    brand?: string,
    name?: string,
    category_id?: string,
  ): Promise<Product[]>; //encontrar Productros disponíveis

  findById(id: string): Promise<Product | undefined>;
  updateAvailable(id: string, available: boolean): Promise<void>;
}
export { IProductsRepository };
