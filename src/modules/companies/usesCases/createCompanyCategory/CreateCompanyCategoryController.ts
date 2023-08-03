import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateCompanyCategoryUseCase } from './CreateCompanyCategoryUseCase';

//parei no min 11:16
class CreateCompanyCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { category_id } = request.body;

    const createCompanyCategoryUseCase = container.resolve(
      CreateCompanyCategoryUseCase,
    );

    const companies = await createCompanyCategoryUseCase.execute({
      company_id: id,
      category_id,
    });

    console.log(companies);
    return response.json(companies);
  }
}
export { CreateCompanyCategoryController };
