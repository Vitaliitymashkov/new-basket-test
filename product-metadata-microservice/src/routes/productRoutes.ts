import { Router } from 'express';
import ProductController from '../controllers/productController';
import connectDB from '../db/index';

const router = Router();
// You need to import or create a db instance before this line
const productController = new ProductController(connectDB);

import { Express } from 'express';

export const setProductRoutes = (app: Express) => {
    app.post('/products', productController.createProduct.bind(productController));
    app.get('/products/:id', productController.getProduct.bind(productController));
    app.put('/products/:id', productController.updateProduct.bind(productController));
    app.delete('/products/:id', productController.deleteProduct.bind(productController));
    app.get('/products', productController.getAllProducts.bind(productController));
};

export default router;