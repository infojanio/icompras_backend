import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListTenantsUseCase } from './ListTenantsUseCase';

//listar Departamentos
class ListTenantsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listTenantsUseCase = container.resolve(ListTenantsUseCase);
    const all = await listTenantsUseCase.execute();
    return response.status(201).json(all);
  }
}

export { ListTenantsController };
