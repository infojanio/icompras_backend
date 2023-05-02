import { SubCategory } from '../infra/typeorm/entities/SubCategory';

//DTO -> Data Transfer Object
interface ICreateSubCategoryDTO {
  name: string;
  image: string;
  category_id: string;
}

interface ISubCategoriesRepository {
  findByName(name: string): Promise<SubCategory | undefined>;
  list(): Promise<SubCategory[]>;
  create({ name, image, category_id }: ICreateSubCategoryDTO): Promise<void>;
}

export { ISubCategoriesRepository, ICreateSubCategoryDTO };
