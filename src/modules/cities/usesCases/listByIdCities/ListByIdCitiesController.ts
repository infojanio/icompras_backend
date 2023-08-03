import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListByIdCitiesUseCase } from './ListByIdCitiesUseCase';

class ListByIdCitiesController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;

      const listByIdCitiesUseCase = container.resolve(ListByIdCitiesUseCase);

      const city = await listByIdCitiesUseCase.execute({
        id: id as string,
      });
      return response.status(201).json(city);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}
export { ListByIdCitiesController };
