import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListOpeningHoursUseCase } from './ListOpeningHoursUseCase';

class ListOpeningHoursController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listOpeningHoursUseCase = container.resolve(ListOpeningHoursUseCase);
    const all = await listOpeningHoursUseCase.execute();
    return response.status(201).json(all);
  }
}

export { ListOpeningHoursController };
