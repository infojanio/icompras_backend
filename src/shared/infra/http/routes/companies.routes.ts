import { CreateCompanyController } from '@modules/companies/usesCases/createCompany/CreateCompanyController';
import { ensureAuthenticated } from '@shared/infra/http/middlewares/ensureAuthenticated';
import { Router } from 'express';
import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ListCompaniesController } from '@modules/companies/usesCases/listCompanies/ListCompaniesController';
import { ListByIdCompaniesController } from '@modules/companies/usesCases/listByIdCompanies/ListByIdCompaniesController';
import { ListByTenantCompaniesController } from '@modules/companies/usesCases/listByTenantCompanies/ListByTenantCompaniesController';

const companiesRoutes = Router();

const createCompanyController = new CreateCompanyController();
const listCompaniesController = new ListCompaniesController();
const listByIdCompaniesController = new ListByIdCompaniesController();
const listByTenantCompaniesController = new ListByTenantCompaniesController();

companiesRoutes.post(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  createCompanyController.handle,
);

//companiesRoutes.get('/:id', listByIdCompaniesController.handle);
companiesRoutes.get('/tenant', listByTenantCompaniesController.handle);

companiesRoutes.get('/', listCompaniesController.handle); //não necessita estar logado

export { companiesRoutes };
