"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class UsuariosController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarios = yield database_1.default.query(`SELECT * FROM usuarios ORDER BY id_usuario`);
            res.json(usuarios.rows);
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarios = yield database_1.default.query(`SELECT * FROM usuarios`);
            res.json(usuarios.rows);
        });
    }
    add(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("req.body");
            console.log(req.body);
            const result = yield database_1.default.query(`
        INSERT INTO usuarios(nombre_usuario, usuario_usuario, clave_usuario) 
        VALUES($1, $2, $3) RETURNING id_usuario`, [req.body.nombre_usuario,
                req.body.usuario_usuario,
                req.body.clave_usuario,
            ]);
            console.log(result.rows[0].id_usuario);
            res.json({ agregado: true, id_usuario: result.rows[0].id_usuario });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const { id_usuario } = req.params;
            const result = yield database_1.default.query(`
        UPDATE usuarios SET 
        nombre_usuario = $1, 
        usuario_usuario = $2, 
        clave_usuario = $3 
        WHERE id_usuario = $4`, [req.body.nombre_usuario,
                req.body.usuario_usuario,
                req.body.clave_usuario,
                id_usuario
            ]);
            res.json({ modificado: true });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const { id_usuario } = req.params;
            const result = yield database_1.default.query(`
        DELETE FROM usuarios 
        WHERE id_usuario = $1`, [
                id_usuario
            ]);
            res.json({ eliminado: true });
        });
    }
}
const usuariosController = new UsuariosController;
exports.default = usuariosController;
//# sourceMappingURL=UsuariosController.js.map