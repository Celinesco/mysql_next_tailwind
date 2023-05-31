import { createPool } from "mysql2/promise";
// slash promise de esta manera puedo utilizar async await

const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: 'secretpass',
    port: 3306,
    database: 'PostsDB'
})

export { pool };