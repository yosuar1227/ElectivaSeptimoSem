import { connect } from 'mongoose';
import dotenv from 'dotenv';
import { Parameter } from '../util/constants';

dotenv.config();

const connectDB = async () => {
 const url_database = 'mongodb://' + Parameter.DB_HOST + ':' + Parameter.DB_PORT + '/' + Parameter.DB_NAME;
  try {
    await connect(url_database || '');
    console.log('MongoDB conectado');
  } catch (error) {
    console.error(`Error: ${error}`);
    process.exit(1);
  }
};

export default connectDB;