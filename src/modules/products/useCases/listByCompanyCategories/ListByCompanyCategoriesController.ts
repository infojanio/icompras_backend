import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListByCompanyCategoriesUseCase } from './ListByCompanyCategoriesUseCase';
import { validate as isUuid } from 'uuid';

class ListByCompanyCategoriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { name, company_id } = request.query;

      if (!company_id) {
        throw new Error('O tenant_id é obrigatório para filtrar');
      }

      const listByCompanyCategoriesUseCase = container.resolve(
        ListByCompanyCategoriesUseCase,
      );

      const companies = await listByCompanyCategoriesUseCase.execute({
        name: name as string,
        company_id: company_id as string,
      });

      return response.status(201).json(companies);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { ListByCompanyCategoriesController };
