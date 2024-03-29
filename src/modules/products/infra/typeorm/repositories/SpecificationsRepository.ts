import {
  ISpecificationsRepository,
  ICreateSpecificationDTO,
} from '@modules/products/repositories/ISpecificationsRepository';
import { getRepository, Repository } from 'typeorm';
import { Specification } from '../entities/Specification';

class SpecificationsRepository implements ISpecificationsRepository {
  private repository: Repository<Specification>;

  constructor() {
    this.repository = getRepository(Specification);
  }

  async create({
    description,
    expiration_date,
    unity,
    weight,
    brand,
  }: ICreateSpecificationDTO): Promise<Specification> {
    const specification = this.repository.create({
      description,
      expiration_date,
      unity,
      weight,
      brand,
    });
    await this.repository.save(specification);
    return specification;
  }

  async findByName(name: string): Promise<Specification | undefined> {
    const specification = await this.repository.findOne({ name });
    return specification;
  }

  async findByIds(ids: string[]): Promise<Specification[]> {
    const specifications = await this.repository.findByIds(ids);
    return specifications;
  }
  /*
  async findByIds(ids: string[]): Promise<Specification[]> {
    const specification = await this.repository.findOne(id);
    return specification;
  }*/
}

export { SpecificationsRepository };
