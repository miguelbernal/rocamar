import { Router } from 'express';

const router: Router = Router();

router.get('/', (req, res) => {
    console.log('Hola Mundo');
    res.send('<h1>Hola Mundo</h1>');
});

router.get('/clientes', (req, res) => {
    console.log('Hola Mundo clientes');
    res.send('<h1>Hola Mundo Clientes</h1>');
});

export default router;