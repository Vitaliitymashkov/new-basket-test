import { Sequelize } from 'sequelize';

export interface Database {
  products: {
    insert: (product: any) => Promise<void>;
    findOne: (query: any) => Promise<any | null>;
    findOneAndUpdate: (query: any, update: any) => Promise<any | null>;
    deleteOne: (query: any) => Promise<{ deletedCount: number }>;
    find: (query: any) => Promise<any[]>;
  };
}

const sequelize = new Sequelize(
  process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/product_metadata',
  {
  dialect: 'postgres',
//  dialect: 'sqlite', // or 'postgres' for PostgreSQL
//  storage: 'database.sqlite', // for SQLite, specify the database file
  logging: console.log, // enable logging for SQL queries
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

connectDB();

export { connectDB as default, sequelize };