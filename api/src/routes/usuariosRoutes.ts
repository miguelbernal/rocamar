import express, { Router } from 'express'

import usuariosController from '../controllers/UsuariosController'

const router: Router = Router();

router.get('/', usuariosController.list)
router.post('/', usuariosController.add)

export default router