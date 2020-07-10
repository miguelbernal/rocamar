import { Request, Response } from 'express'

import pool from '../database'

class UsuariosController {

    public async list(req: Request, res: Response): Promise<void> {
        const usuarios = await pool.query(`SELECT * FROM usuarios`)
        res.json(usuarios.rows)
    }

}

const usuariosController = new UsuariosController
export default usuariosController