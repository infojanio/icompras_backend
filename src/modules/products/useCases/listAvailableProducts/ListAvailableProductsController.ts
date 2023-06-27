import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListAvailableProductsUseCase } from './ListAvailableProductsUseCase';

class ListAvailableProductsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, subcategory_id } = request.query;

    const listAvailableProductsUseCase = container.resolve(
      ListAvailableProductsUseCase,
    );
<<<<<<< HEAD:src/modules/products/useCases/lisAvailableProducts/ListAvailableController.ts
    const products = listAvalableProductsUseCase.execute({
     // brand: brand as string,
=======
    const products = listAvailableProductsUseCase.execute({
>>>>>>> dev:src/modules/products/useCases/listAvailableProducts/ListAvailableProductsController.ts
      name: name as string,
      subcategory_id: subcategory_id as string,
    });
    console.log('controller=', products);
    return response.json(products);
  }


}
<<<<<<< HEAD:src/modules/products/useCases/lisAvailableProducts/ListAvailableController.ts


export { ListAvailableController };
=======
export { ListAvailableProductsController };
>>>>>>> dev:src/modules/products/useCases/listAvailableProducts/ListAvailableProductsController.ts
