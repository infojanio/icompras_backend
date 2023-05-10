import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListMapLocationsUseCase } from './ListMapLocationsUseCase';

class ListMapLocationsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listMapLocationsUseCase = container.resolve(ListMapLocationsUseCase);
    const all = await listMapLocationsUseCase.execute();
    return response.status(201).json(all);
  }
}

export { ListMapLocationsController };
