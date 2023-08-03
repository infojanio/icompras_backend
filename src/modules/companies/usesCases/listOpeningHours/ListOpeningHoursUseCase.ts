import { OpeningHours } from '@modules/companies/infra/typeorm/entities/OpeningHours';
import { IOpeningHoursRepository } from '@modules/companies/repositories/IOpeningHoursRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class ListOpeningHoursUseCase {
  constructor(
    @inject('OpeningHoursRepository')
    private openingHoursRepository: IOpeningHoursRepository,
  ) {}

  async execute(): Promise<OpeningHours[]> {
    const openinghours = await this.openingHoursRepository.list();
    return openinghours;
  }
}

export { ListOpeningHoursUseCase };
