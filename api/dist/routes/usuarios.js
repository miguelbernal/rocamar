"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UsuariosController_1 = __importDefault(require("../controllers/UsuariosController"));
const router = express_1.Router();
router.get('/', UsuariosController_1.default.list);
exports.default = router;
//# sourceMappingURL=usuarios.js.map