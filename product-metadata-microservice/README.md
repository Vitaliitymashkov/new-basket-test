# Product Metadata Microservice

This project is a TypeScript-based microservice for managing product metadata. It exposes a REST API that allows for full CRUD operations on product entities, enabling integration with various services such as search and recommendation systems.

## Features

- Full CRUD operations for products
- API documentation using Swagger/OpenAPI
- Input validation and error handling
- Basic logging functionality
- Docker support for easy deployment

## Project Structure

```
product-metadata-microservice
├── src
│   ├── controllers          # Contains controllers for handling requests
│   ├── models               # Defines the product model and validation rules
│   ├── routes               # Sets up API routes
│   ├── services             # Contains business logic for product management
│   ├── middlewares          # Middleware for error handling and validation
│   ├── utils                # Utility functions, including logging
│   ├── db                   # Database connection setup
│   ├── app.ts               # Entry point of the application
│   └── swagger.ts           # Swagger/OpenAPI documentation setup
├── tests                    # Contains tests for the API
├── docker-compose.yml       # Docker configuration for the application
├── package.json             # NPM configuration and dependencies
├── tsconfig.json            # TypeScript configuration
└── README.md                # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd product-metadata-microservice
   ```

2. Install dependencies:
   ```
   npm install
   ```
2.1 Init DB with Prisma
   ```
   npx prisma migrate dev --name init
   npx prisma generate
   ```

3. Set up the database (SQLite/Postgres):
   - Update the database configuration in `src/db/index.ts` as needed.

4. Run the application:
   ```
   npm start
   ```

5. Access the API documentation at `http://localhost:3000/api-docs`.

## API Endpoints

- `POST /products` - Create a new product
- `GET /products/:id` - Retrieve a product by ID
- `PUT /products/:id` - Update a product by ID
- `DELETE /products/:id` - Delete a product by ID
- `GET /products` - Retrieve all products

## Running Tests

To run the tests, use the following command:
```
npm test
```

## Docker

To run the application using Docker, execute:
```
docker-compose build
docker-compose up
```

## License

This project is licensed under the MIT License. See the LICENSE file for details.