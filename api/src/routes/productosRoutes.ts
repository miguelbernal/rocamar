import express, { Router } from 'express'

import productosController from '../controllers/ProductosController'

const router: Router = Router();

router.get('/', productosController.list)

export default router