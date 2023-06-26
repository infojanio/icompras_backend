import { ICreateProductDTO } from '@modules/products/dtos/ICreateProductDTO';
import { Product } from '@modules/products/infra/typeorm/entities/Product';
import { IProductsRepository } from '../IProductsRepository';

class ProductsRepositoryInMemory implements IProductsRepository {
  products: Product[] = [];

  async create({
    name,
    price,
    quantity,
    available,
    subcategory_id,
    company_id,
    tenant_id,
  }: ICreateProductDTO): Promise<Product> {
    const product = new Product();

    Object.assign(product, {
      name,
      price,
      quantity,
      available,
      subcategory_id,
      company_id,
      tenant_id,
    });
    this.products.push(product);
    console.log(product);
    return product;
  }

  async findBySubCategory(
    subcategory_id: string,
  ): Promise<Product | undefined> {
    return this.products.find(
      (product) => product.subcategory_id === subcategory_id,
    );
  }

  async findByName(name: string): Promise<Product | undefined> {
    return this.products.find((product) => product.name === name);
  }

  async findAvailable(
    subcategory_id?: string,
    name?: string,
  ): Promise<Product[]> {
    //o uso do filter retorna uma lista de objetos, o find retorna apenas 1 objeto
    const Allproducts = this.products.filter((product) => {
      if (
        product.available === true || //todos carros disponíveis
        (subcategory_id && product.subcategory_id === subcategory_id) || //productros disponíveis pelo nome da subcategoria.
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

  async list(): Promise<Product[]> {
    const all = this.products;
    return all;
  }

  //atualizar status do productro após ser reservado ou devolvido
  async updateAvailable(id: string, available: boolean): Promise<void> {
    const findIndex = this.products.findIndex((product) => product.id === id);
    this.products[findIndex].available = available;
  }
}

export { ProductsRepositoryInMemory };
