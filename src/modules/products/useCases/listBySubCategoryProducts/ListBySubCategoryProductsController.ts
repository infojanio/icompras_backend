import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListBySubCategoryProductsUseCase } from './ListBySubCategoryProductsUseCase';

class ListBySubCategoryProductsController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { name, subcategory_id } = request.query;

      const listBySubCategoryProductsUseCase = container.resolve(
        ListBySubCategoryProductsUseCase,
      );

      const products = await listBySubCategoryProductsUseCase.execute({
        name: name as string,
        subcategory_id: subcategory_id as string,
      });
      return response.status(201).json(products);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { ListBySubCategoryProductsController };
