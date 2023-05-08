import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateStoreUseCase } from './CreateStoreUseCase';

class CreateStoreController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      name,
      slug,
      email,
      password,
      phone,
      isActive,
      isAdmin,
      address_id,
      banner_id,
      openinghours_id,
    } = request.body;

    const createStoreUseCase = container.resolve(CreateStoreUseCase);
    await createStoreUseCase.execute({
      name,
      slug,
      email,
      password,
      phone,
      isActive,
      isAdmin,
      address_id,
      banner_id,
      openinghours_id,
    });
    return response.status(201).send();
  }
}
export { CreateStoreController };
