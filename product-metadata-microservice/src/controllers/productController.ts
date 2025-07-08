//import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import { ProductService } from '../services/productService';

//const prisma = new PrismaClient();

export class ProductController {
    private productService: ProductService;

    constructor(db: any) {
        this.productService = new ProductService(db);
    }

    public async createProduct(req: Request, res: Response): Promise<void> {
        try {
            const product = await this.productService.createProduct(req.body);
            res.status(201).json(product);
        } catch (error) {
            res.status(500).json({ message: error instanceof Error ? error.message : 'Internal server error' });
        }
    }

    public async getProduct(req: Request, res: Response): Promise<void> {
        try {
            const product = await this.productService.getProduct(req.params.id);
            if (product) {
                res.status(200).json(product);
            } else {
                res.status(404).json({ message: 'Product not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error instanceof Error ? error.message : 'Internal server error' });
        }
    }

    public async updateProduct(req: Request, res: Response): Promise<void> {
        try {
            const updatedProduct = await this.productService.updateProduct(req.params.id, req.body);
            if (updatedProduct) {
                res.status(200).json(updatedProduct);
            } else {
                res.status(404).json({ message: 'Product not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error instanceof Error ? error.message : 'Internal server error' });
        }
    }

    public async deleteProduct(req: Request, res: Response): Promise<void> {
        try {
            const deleted = await this.productService.deleteProduct(req.params.id);
            if (deleted) {
                res.status(204).send();
            } else {
                res.status(404).json({ message: 'Product not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error instanceof Error ? error.message : 'Internal server error' });
        }
    }

    public async getAllProducts(req: Request, res: Response): Promise<void> {
        try {
            const products = await this.productService.getAllProducts();
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json({ message: error instanceof Error ? error.message : 'Internal server error' });
        }
    }
}

export { ProductController as default } from './productController';