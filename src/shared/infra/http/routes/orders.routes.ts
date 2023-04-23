import { ListOrdersByUserController } from '@modules/orders/listOrdersByUser/ListOrdersByUserController';
import { CreateOrderController } from '@modules/orders/usesCases/createOrder/CreateOrderController';
import { DevolutionOrderController } from '@modules/orders/usesCases/devolutionOrder/DevolutionOrderController';
import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const orderRoutes = Router();

const createOrderController = new CreateOrderController();
const devolutionOrderController = new DevolutionOrderController();
const listOrdersByUserController = new ListOrdersByUserController();

orderRoutes.post('/', ensureAuthenticated, createOrderController.handle);

orderRoutes.post(
  '/devolution/:id',
  ensureAuthenticated,
  devolutionOrderController.handle,
);

orderRoutes.get(
  '/user',
  ensureAuthenticated,
  listOrdersByUserController.handle,
);

export { orderRoutes };
