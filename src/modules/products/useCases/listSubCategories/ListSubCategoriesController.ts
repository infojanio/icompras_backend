import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListSubCategoriesUseCase } from './ListSubCategoriesUseCase';

class ListSubCategoriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listSubCategoriesUseCase = container.resolve(
      ListSubCategoriesUseCase,
    );
    const all = await listSubCategoriesUseCase.execute();
    return response.status(201).json(all);
  }
}

export { ListSubCategoriesController };
