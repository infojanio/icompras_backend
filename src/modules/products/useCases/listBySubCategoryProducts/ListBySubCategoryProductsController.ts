import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListBySubCategoryProductsUseCase } from './ListBySubCategoryProductsUseCase';

class ListBySubCategoryProductsController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { subcategory_id } = request.query;

      const listBySubCategoryProductsUseCase = container.resolve(
        ListBySubCategoryProductsUseCase,
      );

      const products = await listBySubCategoryProductsUseCase.execute({
        subcategory_id,
      });
      return response.status(201).json(products);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { ListBySubCategoryProductsController };
