import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListByCompanyCategoriesUseCase } from './ListByCompanyCategoriesUseCase';

class ListByCompanyCategoriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { name, category_id } = request.query;

      const listByCompanyCategoriesUseCase = container.resolve(
        ListByCompanyCategoriesUseCase,
      );

      const categories = await listByCompanyCategoriesUseCase.execute({
        name: name as string,
        category_id: category_id as string,
      });
      return response.status(201).json(categories);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { ListByCompanyCategoriesController };
