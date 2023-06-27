import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListProductsUseCase } from './ListProductsUseCase';

class ListProductsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listProductsUseCase = container.resolve(ListProductsUseCase);
    const all = await listProductsUseCase.execute();
    return response.status(201).json(all);
  }
}

export { ListProductsController };
