import { ListOrdersByUserController } from '@modules/orders/listOrdersByUser/ListOrdersByUserController';
import { CreateOrderController } from '@modules/orders/usesCases/createOrder/CreateOrderController';
import { DevolutionOrderController } from '@modules/orders/usesCases/devolutionOrder/DevolutionOrderController';
import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const ordersRoutes = Router();

const createOrderController = new CreateOrderController();
const devolutionOrderController = new DevolutionOrderController();
const listOrdersByUserController = new ListOrdersByUserController();

ordersRoutes.post('/', ensureAuthenticated, createOrderController.handle);

ordersRoutes.post(
  '/devolution/:id',
  ensureAuthenticated,
  devolutionOrderController.handle,
);

ordersRoutes.get(
  '/user',
  ensureAuthenticated,
  listOrdersByUserController.handle,
);

export { ordersRoutes };
