import { Request, Response } from 'express'

import pool from '../database'

class ProductosController {

    public async list(req: Request, res: Response): Promise<void> {
        const productos = await pool.query(`SELECT * FROM productos`)
        res.json(productos.rows)
    }

}

const productosController = new ProductosController
export default productosController