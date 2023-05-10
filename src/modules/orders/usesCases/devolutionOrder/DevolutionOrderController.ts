import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DevolutionOrderUseCase } from './DevolutionOrderUseCase';

class DevolutionOrderController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id: user_id } = request.user;
    const { id } = request.params;

    const devolutionOrderUseCase = container.resolve(DevolutionOrderUseCase);

    const order = await devolutionOrderUseCase.execute({
      id,
      user_id: id,
    });
    return response.status(200).json(order);
  }
}

export { DevolutionOrderController };
