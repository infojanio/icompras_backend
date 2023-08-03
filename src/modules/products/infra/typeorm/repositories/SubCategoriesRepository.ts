import {
  ISubCategoriesRepository,
  ICreateSubCategoryDTO,
} from '@modules/products/repositories/ISubCategoriesRepository';
import { getRepository, Repository } from 'typeorm';
import { SubCategory } from '../entities/SubCategory';
import { Product } from '../entities/Product';

class SubCategoriesRepository implements ISubCategoriesRepository {
  private repository: Repository<SubCategory>;

  constructor() {
    this.repository = getRepository(SubCategory);
  }

  async create({
    name,
    image,
    category_id,
    tenant_id,
  }: ICreateSubCategoryDTO): Promise<void> {
    const subcategory = this.repository.create({
      name,
      image,
      category_id,
      tenant_id,
    });

    await this.repository.save(subcategory);
  }

  async list(): Promise<SubCategory[]> {
    const subcategories = await this.repository.find();
    return subcategories;
  }

  async findByName(name: string): Promise<SubCategory | undefined> {
    const subcategory = this.repository.findOne({ name });
    return subcategory;
  }

  //ATENÇÃO: O método findAvailable retorna o filtro no console.log, mas não retorna no Insominia
  async listBySubCategory(
    subcategory_id?: string,
  ): Promise<Product[] | SubCategory[]> {
    // const products = await this.repository.find({ subcategory_id });

    const productsQuery = await this.repository
      .createQueryBuilder('product')
      .leftJoinAndSelect('product.subcategory', 'subcategory')
      .where('subcategory.name = :subcategory_id', { subcategory_id });

    const products = await productsQuery.getMany();

    return products;
  }

  async listByCategory(
    id?: string,
    //name?: string,
    category_id?: string,
  ): Promise<SubCategory[]> {
    // const products = await this.repository.find({ subcategory_id });

    const subcategoriesQuery = await this.repository
      .createQueryBuilder('subcategory')
      .leftJoinAndSelect('subcategory.category', 'category')
      .where('category.id = :category_id', { category_id });

    const subcategories = await subcategoriesQuery.getMany();

    return subcategories;
  }
}
export { SubCategoriesRepository };
