import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import errorHandler, { notFoundErrorHandler } from './errors/errorHandler.js';
import testRouter from './routes/test.js';

dotenv.config();

// Express
const app = express();

// CORS
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

// Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routers
app.use('/test', testRouter);

// Check
app.get('/', (req, res) => {
  res.status(200).send('Welcome to Kanghyun Server!');
});

// Error
app.use(notFoundErrorHandler);
app.use(errorHandler);

// Run
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`server is running`);
});
