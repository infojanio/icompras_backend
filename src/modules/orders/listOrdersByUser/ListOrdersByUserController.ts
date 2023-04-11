import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListOrdersByUserUseCase } from './ListOrdersByUserUseCase';

//retorna a listagem de pedidos por usuário
class ListOrdersByUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;

    const listOrdersByUserUseCase = container.resolve(ListOrdersByUserUseCase);
    const orders = await listOrdersByUserUseCase.execute(id);
    return response.json(orders);
  }
}
export { ListOrdersByUserController };
