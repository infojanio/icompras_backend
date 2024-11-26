import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreatePromotionUseCase } from './deletePromotionUseCase';

class CreatePromotionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description, images, price } = request.body;

    const createPromotionUseCase = container.resolve(CreatePromotionUseCase);
    await createPromotionUseCase.execute({
      name,
      description,
      images,
      price,
    });
    return response.status(201).send();
  }
}
export { CreatePromotionController };
