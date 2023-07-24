import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListByTenantCompaniesUseCase } from './ListByTenantCompaniesUseCase';

class ListByTenantCompaniesController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { name, tenant_id } = request.query;

      const listByTenantCompaniesUseCase = container.resolve(
        ListByTenantCompaniesUseCase,
      );

      const tenants = await listByTenantCompaniesUseCase.execute({
        name: name as string,
        tenant_id: tenant_id as string,
      });
      return response.status(201).json(tenants);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { ListByTenantCompaniesController };
