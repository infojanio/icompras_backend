import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateProductSpecificationUseCase } from './CreateProductSpecificationUseCase';

//parei no min 11:16
class CreateProductSpecificationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { specifications_id } = request.body;

    const createProductSpecificationUseCase = container.resolve(
      CreateProductSpecificationUseCase,
    );

    const products = await createProductSpecificationUseCase.execute({
      product_id: id,
      specifications_id,
    });

    console.log(products);
    return response.json(products);
  }
}
export { CreateProductSpecificationController };
