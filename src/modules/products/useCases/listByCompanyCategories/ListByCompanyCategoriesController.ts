import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListByCompanyCategoriesUseCase } from './ListByCompanyCategoriesUseCase';
import { validate as isUuid } from 'uuid';

class ListByCompanyCategoriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { company_id, category_id } = request.params;

      if (!company_id) {
        throw new Error('O company_id é obrigatório para filtrar');
      }

      const listByCompanyCategoriesUseCase = container.resolve(
        ListByCompanyCategoriesUseCase,
      );

      const categories = await listByCompanyCategoriesUseCase.execute({
        company_id: company_id as string,
        category_id: category_id as string,
      });

      return response.status(201).json(categories);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { ListByCompanyCategoriesController };
