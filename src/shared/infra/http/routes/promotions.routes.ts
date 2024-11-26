import { ensureAuthenticated } from '@shared/infra/http/middlewares/ensureAuthenticated';
import { Router } from 'express';
import { ensureAdmin } from '../middlewares/ensureAdmin';
import { CreatePromotionController } from '@modules/promotions/usesCases/createPromotion/CreatePromotionController';
import { ListPromotionsController } from '@modules/promotions/usesCases/listPromotions/ListPromotionsController';
import { ListByIdPromotionsController } from '@modules/promotions/usesCases/listByIdPromotions/ListByIdPromotionsController';

const promotionsRoutes = Router();

const createPromotionController = new CreatePromotionController();
const listPromotionsController = new ListPromotionsController();
const listByIdPromotionsController = new ListByIdPromotionsController();
//const deleteByIdPromotionsController = new DeleteByIdPromotionsController();

promotionsRoutes.post(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  createPromotionController.handle,
);

promotionsRoutes.get('/', listPromotionsController.handle); //não necessita estar logado
promotionsRoutes.get('/:id', listByIdPromotionsController.handle);
//promotionsRoutes.delete('/:id', listByIdPromotionsController.handle);

export { promotionsRoutes };
