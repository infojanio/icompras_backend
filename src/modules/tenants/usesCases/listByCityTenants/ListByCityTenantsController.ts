import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListByCityTenantsUseCase } from './ListByCityTenantsUseCase';

class ListByCityTenantsController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { name, city_id } = request.query;

      const listByCityTenantsUseCase = container.resolve(
        ListByCityTenantsUseCase,
      );

      const tenants = await listByCityTenantsUseCase.execute({
        name: name as string,
        city_id: city_id as string,
      });
      return response.status(201).json(tenants);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { ListByCityTenantsController };
