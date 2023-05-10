import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ImportSubCategoryUseCase } from './ImportSubCategoryUseCase';

class ImportSubCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { file } = request;

    const importSubCategoryUseCase = container.resolve(
      ImportSubCategoryUseCase,
    );
    await importSubCategoryUseCase.execute(file);
    return response.send();
  }
}
export { ImportSubCategoryController };
