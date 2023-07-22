import { CreateCompanyController } from '@modules/companies/usesCases/createCompany/CreateCompanyController';
import { ensureAuthenticated } from '@shared/infra/http/middlewares/ensureAuthenticated';
import { Router } from 'express';
import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ListCompaniesController } from '@modules/companies/usesCases/listCompanies/ListCompaniesController';
import { ListByIdCompaniesController } from '@modules/companies/usesCases/listByIdCompanies/ListByIdCompaniesController';
import { ListByCityCompaniesController } from '@modules/companies/usesCases/listByCityCompanies/ListByCityCompaniesController';

const companiesRoutes = Router();

const createCompanyController = new CreateCompanyController();
const listCompaniesController = new ListCompaniesController();
const listByCityCompaniesController = new ListByCityCompaniesController();
const listByIdCompaniesController = new ListByIdCompaniesController();

companiesRoutes.post(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  createCompanyController.handle,
);

companiesRoutes.get('/:id', listByIdCompaniesController.handle);

companiesRoutes.get('/', listCompaniesController.handle); //não necessita estar logado
companiesRoutes.get('/city', listByCityCompaniesController.handle);

export { companiesRoutes };
