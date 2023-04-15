import {
  ISubCategoriesRepository,
  ICreateSubCategoryDTO,
} from '@modules/products/repositories/ISubCategoriesRepository';
import { getRepository, Repository } from 'typeorm';
import { SubCategory } from '../entities/SubCategory';

class SubCategoriesRepository implements ISubCategoriesRepository {
  private repository: Repository<SubCategory>;

  constructor() {
    this.repository = getRepository(SubCategory);
  }

  async create({ name, image }: ICreateSubCategoryDTO): Promise<void> {
    const subcategory = this.repository.create({
      name,
      image,
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
}
export { SubCategoriesRepository };
