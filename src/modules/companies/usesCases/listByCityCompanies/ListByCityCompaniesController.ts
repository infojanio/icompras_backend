import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListByCityCompaniesUseCase } from './ListByCityCompaniesUseCase';

class ListByCityCompaniesController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { name, city_id } = request.query;

      const listByCityCompaniesUseCase = container.resolve(
        ListByCityCompaniesUseCase,
      );

      const companies = await listByCityCompaniesUseCase.execute({
        name: name as string,
        city_id: city_id as string,
      });
      return response.status(201).json(companies);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { ListByCityCompaniesController };
