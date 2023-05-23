import {
  IOpeningHoursRepository,
  ICreateOpeningHourDTO,
} from '@modules/companies/repositories/IOpeningHoursRepository';
import { getRepository, Repository } from 'typeorm';
import { OpeningHours } from '../entities/OpeningHours';

class OpeningHoursRepository implements IOpeningHoursRepository {
  private repository: Repository<OpeningHours>;

  constructor() {
    this.repository = getRepository(OpeningHours);
  }

  async create({
    title,
    operation_week,
    operation_weekend,
    notice,
    status,
  }: ICreateOpeningHourDTO): Promise<void> {
    const openinghours = this.repository.create({
      title,
      operation_week,
      operation_weekend,
      notice,
      status,
    });

    await this.repository.save(openinghours);
  }

  async list(): Promise<OpeningHours[]> {
    const openinghours = await this.repository.find();
    return openinghours;
  }

  // método encontrar usuário por nome
  public async findByName(title: string): Promise<OpeningHours | undefined> {
    const openinghours = await this.repository.findOne({
      where: { title },
    });

    return openinghours;
  }
}
export { OpeningHoursRepository };
