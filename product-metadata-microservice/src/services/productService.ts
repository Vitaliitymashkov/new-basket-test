import { v4 as uuidv4 } from 'uuid';
import { Product } from '../models/product';
import type { Database } from "../db/index";


export class ProductService {
    private db: Database;

    constructor(db: Database) {
        this.db = db;
    }

    async createProduct(productData: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>): Promise<Product> {
        const newProduct: Product = {
            id: uuidv4(),
            createdAt: new Date(),
            updatedAt: new Date(),
            ...productData,
        };
        await this.db.products.insert(newProduct);
        return newProduct;
    }

    async getProduct(id: string): Promise<Product | null> {
        return await this.db.products.findOne({ id });
    }

    async updateProduct(id: string, productData: Partial<Omit<Product, 'id' | 'createdAt'>>): Promise<Product | null> {
        const updatedProduct = await this.db.products.findOneAndUpdate({ id }, { $set: { ...productData, updatedAt: new Date() } });
        return updatedProduct;
    }

    async deleteProduct(id: string): Promise<boolean> {
        const result = await this.db.products.deleteOne({ id });
        return result.deletedCount === 1;
    }

    async getAllProducts(): Promise<Product[]> {
        return await this.db.products.find({});
    }
}