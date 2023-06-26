import { ICreateProductDTO } from '@modules/products/dtos/ICreateProductDTO';
import { Product } from '@modules/products/infra/typeorm/entities/Product';

interface IProductsRepository {
  create(data: ICreateProductDTO): Promise<Product>;

  findByName(name: string): Promise<Product | undefined>;

  findBySubCategory(name: string): Promise<Product | undefined>;

  findAvailable(
    id?: string,
    name?: string,
    subcategory_id?: string,
  ): Promise<Product[]>; //encontrar Productros disponíveis

  list(): Promise<Product[]>;

  listBySubCategory(subcategory_id: string): Promise<Product[]>;

  findById(id: string): Promise<Product | undefined>;

  updateAvailable(id: string, available: boolean): Promise<void>;
}
export { IProductsRepository };
