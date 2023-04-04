import { ListRentalsByUserController } from '@modules/orders/listRentalsByUser/ListRentalsByUserController';
import { CreateRentalController } from '@modules/orders/useCases/createRental/CreateRentalController';
import { DevolutionRentalController } from '@modules/orders/useCases/devolutionRental/DevolutionRentalController';
import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const rentalRoutes = Router();

const createRentalController = new CreateRentalController();
const devolutionRentalController = new DevolutionRentalController();
const listRentalsByUserController = new ListRentalsByUserController();

rentalRoutes.post('/', ensureAuthenticated, createRentalController.handle);

rentalRoutes.post(
  '/devolution/:id',
  ensureAuthenticated,
  devolutionRentalController.handle,
);

rentalRoutes.get(
  '/user',
  ensureAuthenticated,
  listRentalsByUserController.handle,
);

export { rentalRoutes };
