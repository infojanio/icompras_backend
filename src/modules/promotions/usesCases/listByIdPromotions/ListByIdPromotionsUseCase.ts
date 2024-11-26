import { Product } from '@modules/products/infra/typeorm/entities/Product';
import { IPromotionsRepository } from '@modules/promotions/repositories/IPromotionsRepository';
import { inject, injectable } from 'tsyringe';
import { Promotion } from '@modules/promotions/infra/typeorm/entities/Promotion';

@injectable()
class ListByIdPromotionsUseCase {
  constructor(
    @inject('PromotionsRepository')
    private promotionsRepository: IPromotionsRepository,
  ) {}

  async execute({ id }): Promise<Promotion> {
    const promotion = await this.promotionsRepository.listById(id);
    console.log('UseCase=', promotion); //lista o produto por id
    return promotion;
  }
}

export { ListByIdPromotionsUseCase };
