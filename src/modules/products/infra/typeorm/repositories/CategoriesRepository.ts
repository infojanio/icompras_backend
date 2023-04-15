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

  async create({ name, image }: ICreateCategoryDTO): Promise<void> {
    const category = this.repository.create({
      name,
      image,
    });

    await this.repository.save(category);
  }

  async list(): Promise<Category[]> {
    const categories = await this.repository.find();
    return categories;
  }

  async findByName(name: string): Promise<Category | undefined> {
    const category = this.repository.findOne({ name });
    return category;
  }
}
export { CategoriesRepository };
