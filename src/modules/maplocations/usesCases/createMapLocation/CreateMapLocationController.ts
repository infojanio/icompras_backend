import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateMapLocationUseCase } from './CreateMapLocationUseCase';

class CreateMapLocationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { avatar, longitude, latitude, user_id, isActive } = request.body;

    const createMapLocationUseCase = container.resolve(
      CreateMapLocationUseCase,
    );
    await createMapLocationUseCase.execute({
      avatar,
      longitude,
      latitude,
      user_id,
      isActive,
    });
    return response.status(201).send();
  }
}
export { CreateMapLocationController };
