import app from './app';
import connectDB from './db/index';

const PORT = process.env.PORT || 3000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('Database connection failed:', err);
    process.exit(1);
  });
