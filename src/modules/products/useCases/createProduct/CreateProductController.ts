import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateProductUseCase } from './CreateProductUseCase';

class CreateProductController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      name,
      description,
      daily_rate,
      license_plate,
      fine_amount,
      brand,
      category_id,
    } = request.body;

    const createProductUseCase = container.resolve(CreateProductUseCase);

    const product = await createProductUseCase.execute({
      name,
      description,
      daily_rate,
      license_plate,
      fine_amount,
      brand,
      category_id,
    });
    return response.status(201).json(product);
  }
}
export { CreateProductController };
