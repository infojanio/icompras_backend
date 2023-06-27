import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateProductUseCase } from './CreateProductUseCase';

class CreateProductController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      name,
      price,
      quantity,
      available,
      subcategory_id,
      company_id,
      tenant_id,
    } = request.body;

    const createProductUseCase = container.resolve(CreateProductUseCase);

    const product = await createProductUseCase.execute({
      name,
      price,
      quantity,
      available,
      subcategory_id,
      company_id,
      tenant_id,
    });
    return response.status(201).json(product);
  }
}
export { CreateProductController };
