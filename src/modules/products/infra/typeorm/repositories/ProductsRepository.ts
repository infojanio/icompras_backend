import { ICreateCarDTO } from '@modules/products/dtos/ICreateCarDTO';
import { IProductsRepository } from '@modules/products/repositories/IProductsRepository';
import { getRepository, Repository } from 'typeorm';
import { Product } from '../entities/Product';

class ProductsRepository implements IProductsRepository {
  private repository: Repository<Product>;

  constructor() {
    this.repository = getRepository(Product);
  }

  //Deve ser possível cadastrar um novo Productro
  async create({
    name,
    description,
    brand,
    category_id,
    daily_rate,
    fine_amount,
    license_plate,
    specifications,
    id,
  }: ICreateProductDTO): Promise<Product> {
    const product = this.repository.create({
      name,
      description,
      brand,
      category_id,
      daily_rate,
      fine_amount,
      license_plate,
      specifications,
      id,
    });
    await this.repository.save(product);
    return product;
  }

  /*Encontra carro por placa
  async findByLicensePlate(license_plate: string): Promise<Car | undefined> {
    const car = await this.repository.findOne({
      license_plate,
    });
    return car;
  }
  */

  //ATENÇÃO: O método findAvailable retorna o filtro no console.log, mas não retorna no Insominia

  // Encontra todos os produtos disponíveis
  async findAvailable(
    brand?: string,
    name?: string,
    category_id?: string,
  ): Promise<Product[]> {
    const carsQuery = await this.repository
      .createQueryBuilder('c')
      .where('available = :available', { available: true });

    //busca por marca
    if (brand) {
      carsQuery.andWhere('brand = :brand', { brand });
    }

    //busca por nome
    if (name) {
      carsQuery.andWhere('name = :name', { name });
    }

    //busca por categoria
    if (category_id) {
      carsQuery.andWhere('category_id = :category_id', { category_id });
    }

    const products = await carsQuery.getMany();
    return products;
    //console.log(cars); No insominia não retorna os dados filtrados
  }

  async findById(id: string): Promise<Product | undefined> {
    const product = await this.repository.findOne(id);
    return product;
  }

  async updateAvailable(id: string, available: boolean): Promise<void> {
    await this.repository
      .createQueryBuilder()
      .update()
      .set({ available })
      .where('id = :id')
      .setParameters({ id })
      .execute();

    //update cars set available = 'true' where id = :id
  }
}
export { ProductsRepository };
