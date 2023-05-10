import { hash } from 'bcrypt';
import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/errors/AppError';
import { ICreateMapLocationDTO } from '@modules/maplocations/dtos/ICreateMapLocationDTO';
import { IMapLocationsRepository } from '@modules/maplocations/repositories/IMapLocationsRepository';

@injectable()
class CreateMapLocationUseCase {
  constructor(
    @inject('MapLocationsRepository')
    private maplocationsRepository: IMapLocationsRepository,
  ) {}

  async execute({
    avatar,
    longitude,
    latitude,
    user_id,
    isActive,
  }: ICreateMapLocationDTO): Promise<void> {
    //Não permitir cadastrar usuário com mesmo email

    const maplocationAlreadyExists = await this.maplocationsRepository.findByLocation(
      latitude,
      longitude,
      user_id,
    );

    if (maplocationAlreadyExists) {
      throw new AppError('Location already exists!');
    }

    await this.maplocationsRepository.create({
      avatar,
      longitude,
      latitude,
      user_id,
      isActive,
    });
  }
}
export { CreateMapLocationUseCase };
