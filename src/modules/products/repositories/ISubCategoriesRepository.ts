import { SubCategory } from '../infra/typeorm/entities/SubCategory';

//DTO -> Data Transfer Object
interface ICreateSubCategoryDTO {
  name: string;
  image: string;
}

interface ISubCategoriesRepository {
  findByName(name: string): Promise<SubCategory | undefined>;
  list(): Promise<SubCategory[]>;
  create({ name, image }: ICreateSubCategoryDTO): Promise<void>;
}

export { ISubCategoriesRepository, ICreateSubCategoryDTO };
