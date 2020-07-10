"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.get('/', (req, res) => {
    console.log('Hola Mundo');
    res.send('<h1>Hola Mundo</h1>');
});
router.get('/clientes', (req, res) => {
    console.log('Hola Mundo clientes');
    res.send('<h1>Hola Mundo Clientes</h1>');
});
exports.default = router;
//# sourceMappingURL=auth.js.map