import { Category } from '@modules/products/infra/typeorm/entities/Category';
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from '../ICategoriesRepository';

class CategoriesRepositoryInMemory implements ICategoriesRepository {
  categories: Category[] = [];

  async findByName(name: string): Promise<Category | undefined> {
    const category = this.categories.find((category) => category.name == name);
    return category;
  }

  async list(): Promise<Category[]> {
    const all = this.categories;
    return all;
  }

  async create({ name, image }: ICreateCategoryDTO): Promise<void> {
    const category = new Category();

    Object.assign(category, {
      name,
      image,
    });
    this.categories.push(category);
  }
}

export { CategoriesRepositoryInMemory };
