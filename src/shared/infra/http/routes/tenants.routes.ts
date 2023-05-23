import { CreateTenantController } from '@modules/tenants/usesCases/createTenant/CreateTenantController';
import { ensureAuthenticated } from '@shared/infra/http/middlewares/ensureAuthenticated';
import { Router } from 'express';
import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ListTenantsController } from '@modules/tenants/usesCases/listTenants/ListTenantsController';

const tenantsRoutes = Router();

const createTenantController = new CreateTenantController();
const listTenantsController = new ListTenantsController();

tenantsRoutes.post(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  createTenantController.handle,
);

tenantsRoutes.get('/', listTenantsController.handle); //não necessita estar logado

export { tenantsRoutes };
