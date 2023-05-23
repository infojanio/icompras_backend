import { hash } from 'bcrypt';
import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/errors/AppError';
import { ICreateCityDTO } from '@modules/cities/dtos/ICreateCityDTO';
import { ICitiesRepository } from '@modules/cities/repositories/ICitiesRepository';

@injectable()
class CreateCityUseCase {
  constructor(
    @inject('CitiesRepository')
    private citiesRepository: ICitiesRepository,
  ) {}

  async execute({ name, uf, cep, isActive }: ICreateCityDTO): Promise<void> {
    //Não permitir cadastrar usuário com mesmo email
    const cityAlreadyExists = await this.citiesRepository.findByName(name);

    if (cityAlreadyExists) {
      throw new AppError('City already exists!');
    }

    await this.citiesRepository.create({
      name,
      uf,
      cep,
      isActive,
    });
  }
}
export { CreateCityUseCase };
