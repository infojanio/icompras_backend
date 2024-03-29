import { CreateTenantController } from '@modules/tenants/usesCases/createTenant/CreateTenantController';
import { ensureAuthenticated } from '@shared/infra/http/middlewares/ensureAuthenticated';
import { Router } from 'express';
import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ListTenantsController } from '@modules/tenants/usesCases/listTenants/ListTenantsController';
import { ListByCityTenantsController } from '@modules/tenants/usesCases/listByCityTenants/ListByCityTenantsController';
import { ListByIdTenantsController } from '@modules/tenants/usesCases/listByIdTenants/ListByIdTenantsController';

const tenantsRoutes = Router();

const createTenantController = new CreateTenantController();
const listTenantsController = new ListTenantsController();
const listByIdTenantsController = new ListByIdTenantsController();
const listByCityTenantsController = new ListByCityTenantsController();

tenantsRoutes.post(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  createTenantController.handle,
);

tenantsRoutes.get('/', listTenantsController.handle); //não necessita estar logado

//tenantsRoutes.get('/:id', listByIdTenantsController.handle);
tenantsRoutes.get('/city', listByCityTenantsController.handle);

export { tenantsRoutes };
