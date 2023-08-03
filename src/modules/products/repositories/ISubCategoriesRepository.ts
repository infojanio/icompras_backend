import { SubCategory } from '../infra/typeorm/entities/SubCategory';

//DTO -> Data Transfer Object
interface ICreateSubCategoryDTO {
  name: string;
  image: string;
  category_id: string;
  tenant_id: string;
}

interface ISubCategoriesRepository {
  create({
    name,
    image,
    category_id,
    tenant_id,
  }: ICreateSubCategoryDTO): Promise<void>;

  findByName(name: string): Promise<SubCategory | undefined>;

  list(): Promise<SubCategory[]>;

  listByCategory(category_id?: string): Promise<SubCategory[]>;
}

export { ISubCategoriesRepository, ICreateSubCategoryDTO };
