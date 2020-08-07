import { Request, Response } from 'express'

import pool from '../database'

class UsuariosController {

    public async list(req: Request, res: Response): Promise<void> {
        const usuarios = await pool.query(`SELECT * FROM usuarios`)
        res.json(usuarios.rows)
    }

    public async login(req: Request, res: Response): Promise<void> {
        const usuarios = await pool.query(`SELECT * FROM usuarios`)
        res.json(usuarios.rows)
    }

    public async add(req: Request, res: Response): Promise<void> {
        console.log(req.body);
        const nombre = req.body.nombre_usuario;
        const usuario = req.body.usuario_usuario;
        const clave = req.body.clave_usuario;
        await pool.query(`
        INSERT INTO usuarios(nombre_usuario, usuario_usuario, clave_usuario) 
        VALUES('${nombre}', '${usuario}', '${clave}')
        `)
        res.json({agregado: true})
    }

}

const usuariosController = new UsuariosController
export default usuariosController