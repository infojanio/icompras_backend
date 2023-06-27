import { ICreateProductDTO } from '@modules/products/dtos/ICreateProductDTO';
import { Product } from '@modules/products/infra/typeorm/entities/Product';

interface IProductsRepository {
  create(data: ICreateProductDTO): Promise<Product>;

  findByName(name: string): Promise<Product | undefined>;

  findBySubCategory(name: string): Promise<Product | undefined>;

  listBySubCategory(
    id?: string,
    name?: string,
    subcategory_id?: string,
  ): Promise<Product[]>;

  findAvailable(
    id?: string,
    name?: string,
    subcategory_id?: string,
  ): Promise<Product[]>; //encontrar Productros disponíveis

  list(): Promise<Product[]>;

  updateAvailable(id: string, available: boolean): Promise<void>;

  findById(id: string): Promise<Product | undefined>;
}
export { IProductsRepository };
