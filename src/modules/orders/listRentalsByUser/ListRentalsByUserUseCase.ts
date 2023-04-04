import { inject, injectable } from 'tsyringe';
import { Rental } from '../infra/typeorm/entities/Order';
import { IRentalsRepository } from '../repositories/IOrdersRepository';

@injectable()
class ListRentalsByUserUseCase {
  constructor(
    @inject('RentalsRepository')
    private rentalsRepository: IRentalsRepository,
  ) {}

  async execute(user_id: string): Promise<Rental[]> {
    const rentalsByUser = await this.rentalsRepository.findByUser(user_id);
    return rentalsByUser;
  }
}
export { ListRentalsByUserUseCase };
