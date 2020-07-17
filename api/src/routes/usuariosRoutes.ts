import express, { Router } from 'express'

import usuariosController from '../controllers/UsuariosController'

const router: Router = Router();

router.get('/', usuariosController.list)

export default router