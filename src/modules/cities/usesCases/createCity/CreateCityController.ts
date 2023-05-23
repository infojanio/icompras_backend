import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateCityUseCase } from './CreateCityUseCase';

class CreateCityController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, uf, cep, longitude, latitude, isActive } = request.body;

    const createCityUseCase = container.resolve(CreateCityUseCase);
    await createCityUseCase.execute({
      name,
      uf,
      cep,
      isActive,
    });
    return response.status(201).send();
  }
}
export { CreateCityController };
