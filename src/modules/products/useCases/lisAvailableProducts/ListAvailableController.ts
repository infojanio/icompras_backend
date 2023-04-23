import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListAvailableProductsUseCase } from './ListAvailableProductsUseCase';

class ListAvailableController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { brand, name, category_id } = request.query;

    const listAvalableProductsUseCase = container.resolve(
      ListAvailableProductsUseCase,
    );
    const products = listAvalableProductsUseCase.execute({
      brand: brand as string,
      name: name as string,
      category_id: category_id as string,
    });
    console.log('controller=', products);
    return response.json(products);
  }
}
export { ListAvailableController };
