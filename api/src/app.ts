import express, { Application } from 'express';
import morgan from 'morgan';

import authRoutes from './routes/authRoutes';
import usuariosRoutes from './routes/usuariosRoutes';
import productosRoutes from './routes/productosRoutes';

const app: Application = express();

// setting
app.set('port', 3000)

// middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}))

// routes
app.use(authRoutes);
app.use('/api/usuarios', usuariosRoutes)
app.use('/api/productos', productosRoutes)

export default app;