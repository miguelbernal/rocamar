import express, { Application } from 'express';
import morgan from 'morgan';

import authRoutes from './routes/auth';
import usuarios from './routes/usuarios';

const app: Application = express();

// setting
app.set('port', 3000)

// middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}))

// routes
app.use(authRoutes);
app.use('/api/usuarios', usuarios)

export default app;