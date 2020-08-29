import { Request, Response } from 'express'

import pool from '../database'

class UsuariosController {

    public async list(req: Request, res: Response): Promise<void> {
        const usuarios = await pool.query(`SELECT * FROM usuarios ORDER BY id_usuario`)
        res.json(usuarios.rows)
    }

    public async login(req: Request, res: Response): Promise<void> {
        const usuarios = await pool.query(`SELECT * FROM usuarios`)
        res.json(usuarios.rows)
    }

    public async add(req: Request, res: Response): Promise<void> {
        console.log("req.body");
        console.log(req.body);
        const result = await pool.query(`
        INSERT INTO usuarios(nombre_usuario, usuario_usuario, clave_usuario) 
        VALUES($1, $2, $3) RETURNING id_usuario`,
        [req.body.nombre_usuario,
         req.body.usuario_usuario,
         req.body.clave_usuario,
        ]);
        console.log(result.rows[0].id_usuario);
        res.json({agregado: true, id_usuario: result.rows[0].id_usuario})
    }

    public async update(req: Request, res: Response): Promise<void> {
        console.log(req.body);
        const { id_usuario } = req.params;
        const result = await pool.query(`
        UPDATE usuarios SET 
        nombre_usuario = $1, 
        usuario_usuario = $2, 
        clave_usuario = $3 
        WHERE id_usuario = $4`,
        [req.body.nombre_usuario,
         req.body.usuario_usuario,
         req.body.clave_usuario,
         id_usuario
        ]);
        res.json({modificado: true})
    }

    public async delete(req: Request, res: Response): Promise<void> {
        console.log(req.body);
        const { id_usuario } = req.params;
        const result = await pool.query(`
        DELETE FROM usuarios 
        WHERE id_usuario = $1`,
        [
         id_usuario
        ]);
        res.json({eliminado: true})
    }


}

const usuariosController = new UsuariosController
export default usuariosController