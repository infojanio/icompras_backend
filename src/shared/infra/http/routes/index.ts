import { Router } from 'express';
import { authenticateRoutes } from './authenticate.routes';
import { categoriesRoutes } from './categories.routes';

import { subcategoriesRoutes } from './subcategories.routes';
import { specificationsRoutes } from './specifications.routes';
import { usersRoutes } from './users.routes';
import { productsRoutes } from './products.routes';
import { ordersRoutes } from './orders.routes';
import { passwordRoutes } from './password.routes';
import { citiesRoutes } from './cities.routes';
import { companiesRoutes } from './companies.routes';
import { tenantsRoutes } from './tenants.routes';

const router = Router();

router.use('/categories', categoriesRoutes);
router.use('/subcategories', subcategoriesRoutes);
router.use('/specifications', specificationsRoutes);
router.use('/users', usersRoutes);
router.use('/cities', citiesRoutes);
router.use('/companies', companiesRoutes);
router.use('/orders', ordersRoutes);
router.use('/products', productsRoutes);
router.use('/tenants', tenantsRoutes);
router.use('/password', passwordRoutes);
router.use(authenticateRoutes); // assim passa com "/"

export { router };
