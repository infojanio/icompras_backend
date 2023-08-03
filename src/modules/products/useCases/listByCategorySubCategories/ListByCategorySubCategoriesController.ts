import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListByCategorySubCategoriesUseCase } from './ListByCategorySubCategoriesUseCase';

class ListByCategorySubCategoriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { name, category_id } = request.query;

      const listByCategorySubCategoriesUseCase = container.resolve(
        ListByCategorySubCategoriesUseCase,
      );

      const tenants = await listByCategorySubCategoriesUseCase.execute({
        name: name as string,
        category_id: category_id as string,
      });
      return response.status(201).json(tenants);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { ListByCategorySubCategoriesController };
