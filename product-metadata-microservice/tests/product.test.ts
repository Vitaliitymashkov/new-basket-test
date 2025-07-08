import request from 'supertest';
import app from '../src/app'; // Adjust the path as necessary
import { Product } from '../src/models/product';

describe('Product API', () => {
    let productId: string;

    beforeAll(async () => {
        // Setup code to run before all tests, e.g., clearing the database
    });

    afterAll(async () => {
        // Cleanup code to run after all tests, e.g., closing the database connection
    });

    it('should create a new product', async () => {
        const newProduct = {
            name: 'Test Product',
            description: 'This is a test product.',
            tags: ['test', 'product'],
            price: 99.99
        };

        const response = await request(app)
            .post('/products')
            .send(newProduct)
            .expect(201);

        productId = response.body.id;
        expect(response.body).toMatchObject(newProduct);
        expect(response.body.id).toBeDefined();
    });

    it('should retrieve a product by ID', async () => {
        const response = await request(app)
            .get(`/products/${productId}`)
            .expect(200);

        expect(response.body.id).toBe(productId);
    });

    it('should update a product', async () => {
        const updatedProduct = {
            name: 'Updated Product',
            description: 'This is an updated test product.',
            tags: ['updated', 'product'],
            price: 89.99
        };

        const response = await request(app)
            .put(`/products/${productId}`)
            .send(updatedProduct)
            .expect(200);

        expect(response.body).toMatchObject(updatedProduct);
    });

    it('should delete a product', async () => {
        await request(app)
            .delete(`/products/${productId}`)
            .expect(204);
    });

    it('should return 404 for a non-existent product', async () => {
        await request(app)
            .get(`/products/${productId}`)
            .expect(404);
    });
});