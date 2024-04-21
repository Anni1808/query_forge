import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'localhost',
    port:3306,
    user: 'root',
    password: '',
    database: 'users',
    waitForConnections: true, // Whether the pool should wait for connections if there are no connections available.
    connectionLimit: 10, // Maximum number of connections in the pool.
    queueLimit: 0 // Maximum number of connection requests the pool should queue.
});

export default pool;
