import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from '@modules/products/repositories/ICategoriesRepository';
import { getRepository, Repository } from 'typeorm';
import { Category } from '../entities/Category';
import { Company } from '@modules/companies/infra/typeorm/entities/Company';

class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
  }

  async listByCategory(
    id?: string,
    //name?: string,
    category_id?: string,
  ): Promise<Company[]> {
    // const products = await this.repository.find({ subcategory_id });

    const categoriesQuery = await this.repository
      .createQueryBuilder('category')
      .leftJoinAndSelect('category.company', 'company')
      .where('category.id = :category_id', { category_id });

    const categories = await categoriesQuery.getMany();

    return categories;
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

  async create({ name, image, tenant_id }: ICreateCategoryDTO): Promise<void> {
    const category = this.repository.create({
      name,
      image,
      tenant_id,
    });

    await this.repository.save(category);
  }

  async list(): Promise<Category[]> {
    const categories = await this.repository.find();
    return categories;
  }

  async listById(id?: string): Promise<Category> {
    // const products = await this.repository.find({ subcategory_id });

    const categoriesQuery = await this.repository
      .createQueryBuilder('category')
      .where('category.id = :id', { id });

    const category = await categoriesQuery.getOneOrFail();

    return category;
  }

  async findByIds(ids: string[]): Promise<Category[]> {
    const categories = await this.repository.findByIds(ids);
    return categories;
  }

  async findByName(name: string): Promise<Category | undefined> {
    const category = this.repository.findOne({ name });
    return category;
  }
}
export { CategoriesRepository };
