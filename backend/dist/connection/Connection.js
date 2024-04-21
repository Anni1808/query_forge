"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_1 = __importDefault(require("mysql2/promise"));
const pool = promise_1.default.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'users',
    waitForConnections: true, // Whether the pool should wait for connections if there are no connections available.
    connectionLimit: 10, // Maximum number of connections in the pool.
    queueLimit: 0 // Maximum number of connection requests the pool should queue.
});
exports.default = pool;
