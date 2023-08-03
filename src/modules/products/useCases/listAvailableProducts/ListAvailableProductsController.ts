import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListAvailableProductsUseCase } from './ListAvailableProductsUseCase';

class ListAvailableProductsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, subcategory_id } = request.query;

    const listAvailableProductsUseCase = container.resolve(
      ListAvailableProductsUseCase,
    );
    const products = listAvailableProductsUseCase.execute({
      name: name as string,
      subcategory_id: subcategory_id as string,
    });
    console.log('controller=', products);
    return response.json(products);
  }
}
export { ListAvailableProductsController };
