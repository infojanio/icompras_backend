import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateOrderUseCase } from './CreateOrderUseCase';

class CreateOrderController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { expected_return_date, product_id } = request.body;
    const { id } = request.user;

    const createOrderUseCase = container.resolve(CreateOrderUseCase);

    const order = await createOrderUseCase.execute({
      product_id,
      expected_return_date,
      user_id: id,
    });

    return response.status(201).json(order);
  }
}

export { CreateOrderController };
