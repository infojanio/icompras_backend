import { Category } from '../infra/typeorm/entities/Category';

//DTO -> Data Transfer Object
interface ICreateCategoryDTO {
  name: string;
  image: string;
  tenant_id: string;
}

interface ICategoriesRepository {
  findByName(name: string): Promise<Category | undefined>;
  list(): Promise<Category[]>;
  findByIds(ids: string[]): Promise<Category[]>;
  listById(
    id?: string,
    name?: string,
    image?: string,
    tenant_id?: string,
  ): Promise<Category>;
  create({ name, image, tenant_id }: ICreateCategoryDTO): Promise<void>;
}

export { ICategoriesRepository, ICreateCategoryDTO };
