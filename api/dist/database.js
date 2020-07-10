"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const { Client } = require('pg');
const keys_1 = __importDefault(require("./keys"));
const pool = new Client(keys_1.default.database);
pool.connect();
exports.default = pool;
//# sourceMappingURL=database.js.map