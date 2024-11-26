import { ICreatePromotionDTO } from '@modules/promotions/dtos/ICreatePromotionDTO';
import { Promotion } from '@modules/promotions/infra/typeorm/entities/Promotion';

interface IPromotionsRepository {
  create(data: ICreatePromotionDTO): Promise<void>;
  findByName(name: string): Promise<Promotion | undefined>;
  //deletePromotion(id: string): Promise<Promotion | undefined>;
  list(): Promise<Promotion[]>;
  listById(
    id?: string,
    name?: string,
    description?: string,
    images?: string[],
    price?: number,
  ): Promise<Promotion>;
  findById(id: string): Promise<Promotion | undefined>;
}
export { IPromotionsRepository };
