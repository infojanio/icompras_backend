import { CreateCityController } from '@modules/cities/usesCases/createCity/CreateCityController';
import { ensureAuthenticated } from '@shared/infra/http/middlewares/ensureAuthenticated';
import { Router } from 'express';
import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ListCitiesController } from '@modules/cities/usesCases/listCities/ListCitiesController';

const citiesRoutes = Router();

const createCityController = new CreateCityController();
const listCitiesController = new ListCitiesController();

citiesRoutes.post(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  createCityController.handle,
);

citiesRoutes.get('/', listCitiesController.handle); //não necessita estar logado

export { citiesRoutes };
