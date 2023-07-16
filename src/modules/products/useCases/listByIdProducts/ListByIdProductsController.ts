import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListByIdProductsUseCase } from './ListByIdProductsUseCase';

class ListByIdProductsController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;

      const listByIdProductsUseCase = container.resolve(
        ListByIdProductsUseCase,
      );

      const product = await listByIdProductsUseCase.execute({
        id: id as string,
      });
      return response.status(201).json(product);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { ListByIdProductsController };
