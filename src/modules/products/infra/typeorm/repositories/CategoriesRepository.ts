import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from '@modules/products/repositories/ICategoriesRepository';
import { getRepository, Repository } from 'typeorm';
import { Category } from '../entities/Category';

class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
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
