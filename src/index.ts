import express from 'express';
import connectDB from './config/database';
import router from './routes/book.routes';

connectDB();

const app = express();

app.use(express.json());
app.use('/api/libros', router);

export default app;