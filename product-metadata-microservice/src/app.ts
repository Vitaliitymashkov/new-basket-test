import express from 'express';
import { json } from 'body-parser';
import { setProductRoutes } from './routes/productRoutes';
import { errorHandler } from './middlewares/errorHandler';
import connectDB from './db/index';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

setProductRoutes(app);

app.use(errorHandler);

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('Database connection failed:', err);
    process.exit(1);
  });

  export default app;