import { pool } from '../../../config/db';

export default async function handler(req, res) {
    const result = await pool.query('SELECT NOW()')
    // select now es para que te de la fecha actual del servidor
    console.log(result)
    console.log('por que no se imprime nada', req.url)
    return res.status(200).json("Getting posts")
}