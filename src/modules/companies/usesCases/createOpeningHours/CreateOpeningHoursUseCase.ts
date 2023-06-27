import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/errors/AppError';
import { IOpeningHoursRepository } from '@modules/companies/repositories/IOpeningHoursRepository';

interface IRequest {
  title: string;
  operation_week: string;
  operation_weekend: string;
  notice: string;
  status: string;
}

@injectable()
class CreateOpeningHoursUseCase {
  constructor(
    @inject('OpeningHoursRepository')
    private openingHoursRepository: IOpeningHoursRepository,
  ) {}

  async execute({
    title,
    operation_week,
    operation_weekend,
    notice,
    status,
  }: IRequest): Promise<void> {
    //verifica se o horário existe
    const openingHoursAlreadyExists = await this.openingHoursRepository.findByName(
      title,
    );
    if (openingHoursAlreadyExists) {
      throw new AppError('OpeningHours Already Exists!');
    }

    await this.openingHoursRepository.create({
      title,
      operation_week,
      operation_weekend,
      notice,
      status,
    });
  }
}

export { CreateOpeningHoursUseCase };
