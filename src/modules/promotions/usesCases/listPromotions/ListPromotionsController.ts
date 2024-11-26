import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListPromotionsUseCase } from './ListPromotionsUseCase';

class ListPromotionsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listPromotionsUseCase = container.resolve(ListPromotionsUseCase);
    const all = await listPromotionsUseCase.execute();
    return response.status(201).json(all);
  }
}

export { ListPromotionsController };
