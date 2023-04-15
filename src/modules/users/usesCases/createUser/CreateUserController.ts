import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      id,
      name,
      email,
      phone,
      password,
      avatar,
      cep,
      district,
      street,
      complement,
      longitude,
      latitude,
      isActive,
      isAdmin,
    } = request.body;

    const createUserUseCase = container.resolve(CreateUserUseCase);
    await createUserUseCase.execute({
      id,
      name,
      email,
      phone,
      password,
      avatar,
      //city_id,
      cep,
      district,
      street,
      complement,
      longitude,
      latitude,
      isActive,
      isAdmin,
    });
    return response.status(201).send();
  }
}
export { CreateUserController };
