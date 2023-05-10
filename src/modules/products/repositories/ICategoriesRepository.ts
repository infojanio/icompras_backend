import { Category } from '../infra/typeorm/entities/Category';

//DTO -> Data Transfer Object
interface ICreateCategoryDTO {
  name: string;
  image: string;
}

interface ICategoriesRepository {
  findByName(name: string): Promise<Category | undefined>;
  list(): Promise<Category[]>;
  create({ name, image }: ICreateCategoryDTO): Promise<void>;
}

export { ICategoriesRepository, ICreateCategoryDTO };
