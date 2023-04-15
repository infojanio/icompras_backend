import { SubCategory } from '@modules/products/infra/typeorm/entities/SubCategory';
import {
  ISubCategoriesRepository,
  ICreateSubCategoryDTO,
} from '../ISubCategoriesRepository';

class SubCategoriesRepositoryInMemory implements ISubCategoriesRepository {
  subcategories: SubCategory[] = [];

  async findByName(name: string): Promise<SubCategory | undefined> {
    const subcategory = this.subcategories.find(
      (subcategory) => subcategory.name == name,
    );
    return subcategory;
  }

  async list(): Promise<SubCategory[]> {
    const all = this.subcategories;
    return all;
  }

  async create({ name, image }: ICreateSubCategoryDTO): Promise<void> {
    const subcategory = new SubCategory();

    Object.assign(subcategory, {
      name,
      image,
    });
    this.subcategories.push(subcategory);
  }
}

export { SubCategoriesRepositoryInMemory };
