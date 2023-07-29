import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListByIdTenantsUseCase } from './ListByIdTenantsUseCase';

class ListByIdTenantsController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;

      const listByIdTenantsUseCase = container.resolve(ListByIdTenantsUseCase);

      const tenant = await listByIdTenantsUseCase.execute({
        id: id as string,
      });
      return response.status(201).json(tenant);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}
export { ListByIdTenantsController };
