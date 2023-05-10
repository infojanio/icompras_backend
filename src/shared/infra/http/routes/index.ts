import { Router } from 'express';
import { authenticateRoutes } from './authenticate.routes';
import { categoriesRoutes } from './categories.routes';

import { subcategoriesRoutes } from './subcategories.routes';
import { specificationsRoutes } from './specifications.routes';
import { usersRoutes } from './users.routes';
import { productsRoutes } from './products.routes';
import { orderRoutes } from './orders.routes';
import { passwordRoutes } from './password.routes';
import { citiesRoutes } from './cities.routes';

const router = Router();

router.use('/categories', categoriesRoutes);
router.use('/subcategories', subcategoriesRoutes);
router.use('/specifications', specificationsRoutes);
router.use('/users', usersRoutes);
router.use('/cities', citiesRoutes);
router.use('/stores', storesRoutes);
router.use('/products', productsRoutes);
router.use('/orders', orderRoutes);
router.use('/password', passwordRoutes);
router.use(authenticateRoutes); // assim passa com "/"

export { router };
