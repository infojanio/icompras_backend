import { CreateCityController } from '@modules/cities/usesCases/createCity/CreateCityController';
import { ensureAuthenticated } from '@shared/infra/http/middlewares/ensureAuthenticated';
import { Router } from 'express';
import { ensureAdmin } from '../middlewares/ensureAdmin';

const citiesRoutes = Router();

const createCityController = new CreateCityController();

citiesRoutes.post(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  createCityController.handle,
);

citiesRoutes.get(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  createCityController.handle,
);

export { citiesRoutes };
