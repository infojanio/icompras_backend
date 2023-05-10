import { Specification } from '@modules/products/infra/typeorm/entities/Specification';

interface ICreateSpecificationDTO {
  description: string;
  expiration_date: Date;
  unity: string;
  weight: string;
  brand: string;
}

interface ISpecificationsRepository {
  create({
    description,
    expiration_date,
    unity,
    weight,
    brand,
  }: ICreateSpecificationDTO): Promise<Specification>;
  findByName(name: string): Promise<Specification | undefined>;
  findByIds(ids: string[]): Promise<Specification[]>;
}

export { ICreateSpecificationDTO, ISpecificationsRepository };
