import { ICreateProductDTO } from '@modules/products/dtos/ICreateProductDTO';
import { Product } from '@modules/products/infra/typeorm/entities/Product';
import { IProductsRepository } from '../IProductsRepository';

class ProductsRepositoryInMemory implements IProductsRepository {
  products: Product[] = [];

  async create({
    name,
    description,
    brand,
    category_id,
    daily_rate,
    fine_amount,
    license_plate,
    id,
  }: ICreateProductDTO): Promise<Product> {
    const product = new Product();

    Object.assign(product, {
      name,
      description,
      brand,
      category_id,
      daily_rate,
      fine_amount,
      license_plate,
      id,
    });
    this.products.push(product);
    console.log(product);
    return product;
  }

  async findByLicensePlate(
    license_plate: string,
  ): Promise<Product | undefined> {
    return this.products.find(
      (product) => product.license_plate === license_plate,
    );
  }

  async findAvailable(
    category_id?: string,
    brand?: string,
    name?: string,
  ): Promise<Product[]> {
    //o uso do filter retorna uma lista de objetos, o find retorna apenas 1 objeto
    const Allproducts = this.products.filter((product) => {
      if (
        product.available === true || //todos carros disponíveis
        (category_id && product.category_id === category_id) || //productros disponíveis pelo nome da categoria.
        (brand && product.brand === brand) || //productros disponíveis pela marca
        (name && product.name === name) //productros disponíveis pelo nome
      ) {
        return product;
      }
      return null;
    });

    return Allproducts;
  }

  async findById(id: string): Promise<Product | undefined> {
    return this.products.find((product) => product.id === id);
  }

  //atualizar status do productro após ser reservado ou devolvido
  async updateAvailable(id: string, available: boolean): Promise<void> {
    const findIndex = this.products.findIndex((product) => product.id === id);
    this.products[findIndex].available = available;
  }
}

export { ProductsRepositoryInMemory };
