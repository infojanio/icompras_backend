import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListByIdPromotionsUseCase } from './ListByIdPromotionsUseCase';

class ListByIdPromotionsController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;

      const listByIdPromotionsUseCase = container.resolve(
        ListByIdPromotionsUseCase,
      );

      const promotion = await listByIdPromotionsUseCase.execute({
        id: id as string,
      });
      return response.status(201).json(promotion);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}
export { ListByIdPromotionsController };
