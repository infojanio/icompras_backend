import { hash } from 'bcrypt';
import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/errors/AppError';
import { ICreatePromotionDTO } from '@modules/promotions/dtos/ICreatePromotionDTO';
import { IPromotionsRepository } from '@modules/promotions/repositories/IPromotionsRepository';

@injectable()
class CreatePromotionUseCase {
  constructor(
    @inject('PromotionsRepository')
    private promotionsRepository: IPromotionsRepository,
  ) {}

  async execute({
    name,
    description,
    images,
    price,
  }: ICreatePromotionDTO): Promise<void> {
    //Não permitir cadastrar usuário com mesmo nome
    const promotionAlreadyExists = await this.promotionsRepository.findByName(
      name,
    );

    if (promotionAlreadyExists) {
      throw new AppError('Promotion already exists!');
    }

    await this.promotionsRepository.create({
      name,
      description,
      images,
      price,
    });
  }
}
export { CreatePromotionUseCase };
