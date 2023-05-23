import { Router } from 'express';

import { ensureAuthenticated } from '@shared/infra/http/middlewares/ensureAuthenticated';
import { ensureAdmin } from '@shared/infra/http/middlewares/ensureAdmin';
import { CreateOpeningHoursController } from '@modules/companies/usesCases/createOpeningHours/CreateOpeningHoursController';
import { ListOpeningHoursController } from '@modules/companies/usesCases/listOpeningHours/ListOpeningHoursController';

const openinghoursRoutes = Router();

const createOpeningHoursController = new CreateOpeningHoursController();

const listOpeningHoursController = new ListOpeningHoursController();

openinghoursRoutes.post(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  createOpeningHoursController.handle,
);

openinghoursRoutes.get('/', listOpeningHoursController.handle);

export { openinghoursRoutes };
