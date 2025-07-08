import express from 'express';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Product Metadata Microservice',
      version: '1.0.0',
      description: 'API for managing product metadata',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./src/routes/*.ts'], // Path to the API docs
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

const setupSwagger = (app: express.Application) => {
  app.use('/api-docs', ...swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};

export default setupSwagger;