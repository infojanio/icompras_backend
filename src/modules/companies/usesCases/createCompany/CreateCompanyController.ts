import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateCompanyUseCase } from './CreateCompanyUseCase';

class CreateCompanyController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      name,
      slug,
      email,
      cnpj,
      logo,
      phone,
      isActive,
      openinghours_id,
      tenant_id,
    } = request.body;

    const createCompanyUseCase = container.resolve(CreateCompanyUseCase);

    await createCompanyUseCase.execute({
      name,
      slug,
      email,
      cnpj,
      logo,
      phone,
      isActive,
      openinghours_id,
      tenant_id,
    });
    return response.status(201).send();
  }
}
export { CreateCompanyController };
