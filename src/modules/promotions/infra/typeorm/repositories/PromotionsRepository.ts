import { getRepository, Repository } from 'typeorm';

import { ICreatePromotionDTO } from '@modules/promotions/dtos/ICreatePromotionDTO';
import { IPromotionsRepository } from '@modules/promotions/repositories/IPromotionsRepository';
import { Promotion } from '@modules/promotions/infra/typeorm/entities/Promotion';

class PromotionsRepository implements IPromotionsRepository {
  private repository: Repository<Promotion>;

  constructor() {
    this.repository = getRepository(Promotion);
  }

  async create({
    name,
    description,
    images,
    price,
  }: ICreatePromotionDTO): Promise<void> {
    const promotion = this.repository.create({
      name,
      description,
      images,
      price,
    });
    await this.repository.save(promotion);
    console.log(promotion);
  }

  async findByName(name: string): Promise<Promotion | undefined> {
    const promotion = await this.repository.findOne({
      where: { name },
    });
    // console.log(city);
    return promotion;
  }

  /*
  async deletePromotion(id: string): Promise<Promotion | undefined> {
    const promotion = await this.repository.findOne(id); // Encontra a promoção pelo ID

    if (!promotion) {
      throw new Error('Promoção não encontrada'); // Se não encontrar, lança um erro
    }

    await this.repository.delete(promotion); // Remove a promoção
    return promotion;
  }
    */

  async list(): Promise<Promotion[]> {
    const promotions = await this.repository.find();
    return promotions;
  }

  async listById(id?: string): Promise<Promotion> {
    // const products = await this.repository.find({ subcategory_id });

    const promotionsQuery = await this.repository
      .createQueryBuilder('promotion')
      .where('promotion.id = :id', { id });

    const promotion = await promotionsQuery.getOneOrFail();

    return promotion;
  }

  async findById(id: string): Promise<Promotion | undefined> {
    const promotion = await this.repository.findOne(id);
    return promotion;
  }
}

export { PromotionsRepository };
