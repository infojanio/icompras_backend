import { ICreateProductDTO } from '@modules/products/dtos/ICreateProductDTO';
import { IProductsRepository } from '@modules/products/repositories/IProductsRepository';
import { getRepository, Repository } from 'typeorm';
import { Product } from '../entities/Product';

class ProductsRepository implements IProductsRepository {
  private repository: Repository<Product>;

  constructor() {
    this.repository = getRepository(Product);
  }

  //Deve ser possível cadastrar um novo Productro
<<<<<<< HEAD
  async create({ 
    name, 
    available, 
    price, 
    quantity, 
    company_id, 
    subcategory_id, 
    }: ICreateProductDTO): Promise<Product> {
    
      const product = this.repository.create({
      name, 
      available, 
      price, 
      quantity, 
      company_id, 
      subcategory_id, 
 
=======
  async create({
    name,
    price,
    quantity,
    available,
    subcategory_id,
    company_id,
    tenant_id,
  }: ICreateProductDTO): Promise<Product> {
    const product = this.repository.create({
      name,
      price,
      quantity,
      available,
      subcategory_id,
      company_id,
      tenant_id,
>>>>>>> dev
    });

    await this.repository.save(product);
    return product
  }

  //Encontra produto por subcategoria
  async findBySubCategory(subcategory_id: string): Promise<Product | undefined> {
    const product = await this.repository.findOne({
      subcategory_id,
    });
    return product;
  }

<<<<<<< HEAD

  //ATENÇÃO: O método findAvailable retorna o filtro no console.log, mas não retorna no Insominia

  // Encontra todos os produtos disponíveis
  async findAvailable(
   // brand?: string,
   subcategory_id?: string,
    name?: string,
  ): Promise<Product[]> {
    const productsQuery = await this.repository
      .createQueryBuilder('p')
      .where('available = :available', { available: true });

    //busca por marca
    if (subcategory_id) {
      productsQuery.andWhere('subcategory_id = :subcategory_id', { subcategory_id });
    }

    //busca por nome
=======
  //Encontrar por subcategoria
  async findBySubCategory(
    subcategory_id: string,
  ): Promise<Product | undefined> {
    const product = await this.repository.findOne({ where: subcategory_id });
    return product;
  }

  async findByName(name: string): Promise<Product | undefined> {
    const product = await this.repository.findOne({ name });
    return product;
  }

  async list(): Promise<Product[]> {
    const products = await this.repository.find();
    return products;
  }

  //ATENÇÃO: O método findAvailable retorna o filtro no console.log, mas não retorna no Insominia
  async listBySubCategory(
    name?: string,
    subcategory_id?: string,
  ): Promise<Product[]> {
    // const products = await this.repository.find({ subcategory_id });
    const productsQuery = await this.repository
      .createQueryBuilder('c')
      .where('available = :available', { available: true });

    //busca produtos disponíveis pelo nome
>>>>>>> dev
    if (name) {
      productsQuery.andWhere('name = :name', { name });
    }

<<<<<<< HEAD

    const products = await productsQuery.getMany();
=======
    //busca produtos disponíveis pela subcategoria
    if (subcategory_id) {
      productsQuery.andWhere('subcategory_id = :subcategory_id', {
        subcategory_id,
      });
    }

    const products = await productsQuery.getMany();
    // console.log(products); //No insominia não retorna os dados filtrados
    return products;
  }

  // Encontra todos os produtos disponíveis
  async findAvailable(
    name?: string,
    subcategory_id?: string,
  ): Promise<Product[]> {
    const productsQuery = await this.repository
      .createQueryBuilder('c')
      .where('available = :available', { available: true });

    //busca produtos disponíveis pelo nome
    if (name) {
      productsQuery.andWhere('name = :name', { name });
    }

    //busca produtos disponíveis pela subcategoria
    if (subcategory_id) {
      productsQuery.andWhere('subcategory_id = :subcategory_id', {
        subcategory_id,
      });
    }

    const products = await productsQuery.getMany();
    // console.log(products); //No insominia não retorna os dados filtrados
>>>>>>> dev
    return products;
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
