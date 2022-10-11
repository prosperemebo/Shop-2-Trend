import { Router, Request, Response, NextFunction } from 'express';
import { getAllProducts } from '../controllers/productController';

const router: Router = Router();

router.route('/').get(getAllProducts);

export { router as productRouter };
