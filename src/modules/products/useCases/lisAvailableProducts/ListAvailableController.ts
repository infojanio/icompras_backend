import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListAvailableProductsUseCase } from './ListAvailableProductsUseCase';

class ListAvailableController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, subcategory_id } = request.query;

    const listAvalableProductsUseCase = container.resolve(
      ListAvailableProductsUseCase,
    );
    const products = listAvalableProductsUseCase.execute({
     // brand: brand as string,
      name: name as string,
      subcategory_id: subcategory_id as string,
    });
    console.log('controller=', products);
    return response.json(products);
  }
}
export { ListAvailableController };
