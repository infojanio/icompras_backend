import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateTenantUseCase } from './CreateTenantUseCase';

class CreateTenantController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, image, isActive } = request.body;

    const createTenantUseCase = container.resolve(CreateTenantUseCase);
    await createTenantUseCase.execute({
      name,
      image,
      isActive,
    });
    return response.status(201).send();
  }
}
export { CreateTenantController };
