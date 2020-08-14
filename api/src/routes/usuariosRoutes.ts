import express, { Router } from 'express'

import usuariosController from '../controllers/UsuariosController'

import cors from "cors";

//options for cors midddleware
const options:cors.CorsOptions = {
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
    credentials: true,
    methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
    origin: "*",
    preflightContinue: false
  };

const router: Router = Router();

router.use(cors(options));

router.get('/', usuariosController.list)
router.post('/', usuariosController.add)
router.put('/:id_usuario', usuariosController.update)
router.delete('/:id_usuario', usuariosController.delete)

export default router