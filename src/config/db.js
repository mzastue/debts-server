import mongoose from 'mongoose';
require('dotenv').config();

mongoose.Promise = global.Promise;
mongoose.connect(process.env. MONGO_DB_URL);

const connection = mongoose.connection;

connection.on('close', () => {
  console.log('MongoDB closed its connection');
  process.exit(0);
});

export default mongoose;
