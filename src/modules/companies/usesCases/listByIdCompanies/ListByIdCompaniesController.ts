import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListByIdCompaniesUseCase } from './ListByIdCompaniesUseCase';

class ListByIdCompaniesController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;

      const listByIdCompaniesUseCase = container.resolve(
        ListByIdCompaniesUseCase,
      );

      const city = await listByIdCompaniesUseCase.execute({
        id: id as string,
      });
      return response.status(201).json(city);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}
export { ListByIdCompaniesController };
