import app from './app.js';
import config from './config/config.js';
import mongoose from 'mongoose';

const PORT = config.app.port;

mongoose.connect(config.database.mongo_uri).then(() => {
  app.listen(PORT, () => console.log(`Server on port ${PORT}`));
});
