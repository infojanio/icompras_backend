import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListByTenantCompaniesUseCase } from './ListByTenantCompaniesUseCase';
import { validate as isUuid } from 'uuid';

class ListByTenantCompaniesController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { name, tenant_id } = request.query;

      if (!tenant_id) {
        throw new Error('O tenant_id é obrigatório para filtrar');
      }

      const listByTenantCompaniesUseCase = container.resolve(
        ListByTenantCompaniesUseCase,
      );

      const companies = await listByTenantCompaniesUseCase.execute({
        name: name as string,
        tenant_id: tenant_id as string,
      });

      return response.status(201).json(companies);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { ListByTenantCompaniesController };
