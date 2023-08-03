import { CreateCityController } from '@modules/cities/usesCases/createCity/CreateCityController';
import { ensureAuthenticated } from '@shared/infra/http/middlewares/ensureAuthenticated';
import { Router } from 'express';
import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ListCitiesController } from '@modules/cities/usesCases/listCities/ListCitiesController';
import { ListByIdCitiesController } from '@modules/cities/usesCases/listByIdCities/ListByIdCitiesController';

const citiesRoutes = Router();

const createCityController = new CreateCityController();
const listCitiesController = new ListCitiesController();
const listByIdCitiesController = new ListByIdCitiesController();

citiesRoutes.post(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  createCityController.handle,
);

citiesRoutes.get('/', listCitiesController.handle); //não necessita estar logado
citiesRoutes.get('/:id', listByIdCitiesController.handle);

export { citiesRoutes };
