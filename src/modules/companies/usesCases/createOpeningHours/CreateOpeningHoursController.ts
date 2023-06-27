import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateOpeningHoursUseCase } from './CreateOpeningHoursUseCase';

class CreateOpeningHoursController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      title,
      operation_week,
      operation_weekend,
      notice,
      status,
    } = request.body;

    //injeção de dependências
    const createOpeningHoursUseCase = container.resolve(
      CreateOpeningHoursUseCase,
    );

    await createOpeningHoursUseCase.execute({
      title,
      operation_week,
      operation_weekend,
      notice,
      status,
    });

    return response.status(201).send();
  }
}
export { CreateOpeningHoursController };
