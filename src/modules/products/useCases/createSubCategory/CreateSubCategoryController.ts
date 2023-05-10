import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateSubCategoryUseCase } from './CreateSubCategoryUseCase';

class CreateSubCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, image, category_id } = request.body;

    //injeção de dependências
    const createSubCategoryUseCase = container.resolve(
      CreateSubCategoryUseCase,
    );

    await createSubCategoryUseCase.execute({ name, image, category_id });

    return response.status(201).send();
  }
}
export { CreateSubCategoryController };
