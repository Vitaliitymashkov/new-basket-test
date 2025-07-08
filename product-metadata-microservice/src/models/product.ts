import { v4 as uuidv4 } from 'uuid';

export interface Product {
    id: string;
    name: string;
    description: string;
    tags?: string[];
    price: number;
    createdAt: Date;
    updatedAt: Date;
}

export class ProductModel {
    constructor(
        public name: string,
        public description: string,
        public tags: string[] = [],
        public price: number,
        public createdAt: Date = new Date(),
        public updatedAt: Date = new Date(),
    ) {
        this.id = uuidv4();
    }

    id: string;

    validate(): void {
        if (!this.name || this.name.length > 255) {
            throw new Error('Name is required and must be less than 255 characters.');
        }
        if (!this.description || this.description.length > 2000) {
            throw new Error('Description is required and must be less than 2000 characters.');
        }
        if (this.price <= 0) {
            throw new Error('Price must be a positive number.');
        }
    }
}