import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateSubCategoryUseCase } from './CreateSubCategoryUseCase';

class CreateSubCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, image } = request.body;

    //injeção de dependências
    const createSubCategoryUseCase = container.resolve(
      CreateSubCategoryUseCase,
    );

    await createSubCategoryUseCase.execute({ name, image });

    return response.status(201).send();
  }
}
export { CreateSubCategoryController };
