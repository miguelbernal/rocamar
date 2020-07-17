"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const usuariosRoutes_1 = __importDefault(require("./routes/usuariosRoutes"));
const productosRoutes_1 = __importDefault(require("./routes/productosRoutes"));
const app = express_1.default();
// setting
app.set('port', 3000);
// middlewares
app.use(morgan_1.default('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});
// routes
app.use(authRoutes_1.default);
app.use('/api/usuarios', usuariosRoutes_1.default);
app.use('/api/productos', productosRoutes_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map