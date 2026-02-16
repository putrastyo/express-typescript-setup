import dotenv from 'dotenv';

dotenv.config();

const config = {
  app: {
    port: process.env.PORT || 3000,
  },
  database: {
    mongo_uri: process.env.MONGO_URI || 'mongodb://localhost:27017',
  },
};

export default config;
