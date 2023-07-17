import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListByIdCategoriesUseCase } from './ListByIdCategoriesUseCase';

class ListByIdCategoriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;

      const listByIdCategoriesUseCase = container.resolve(
        ListByIdCategoriesUseCase,
      );

      const product = await listByIdCategoriesUseCase.execute({
        id: id as string,
      });
      return response.status(201).json(product);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}
export { ListByIdCategoriesController };
