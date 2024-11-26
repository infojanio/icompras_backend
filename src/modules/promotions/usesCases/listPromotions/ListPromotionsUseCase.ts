import { Promotion } from '@modules/promotions/infra/typeorm/entities/Promotion';
import { IPromotionsRepository } from '@modules/promotions/repositories/IPromotionsRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class ListPromotionsUseCase {
  constructor(
    @inject('PromotionsRepository')
    private promotionsRepository: IPromotionsRepository,
  ) {}

  async execute(): Promise<Promotion[]> {
    const promotions = await this.promotionsRepository.list();
    return promotions;
  }
}

export { ListPromotionsUseCase };
