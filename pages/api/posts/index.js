import { pool } from '../../../config/db';

export default async function handler(req, res) {
    switch (req.method) {
        case 'GET':
          await getPosts(req, res);
          break;
        case 'POST':
           await savePost(req, res);
           break
        default:
            return;
    }
    // const [rows] = await pool.query('SELECT NOW()')
    // select now es para que te de la fecha actual del servidor
    // rows = respuestas de las filas. Si no esto era la respuesta:
    // [
    //     [ { 'NOW()': 2023-05-31T09:05:53.000Z } ],
    //     [
    //       ColumnDefinition {
    //         _buf: <Buffer 01 00 00 01 01 1b 00 00 02 03 64 65 66 00 00 00 05 4e 4f 57 28 29 00 0c 3f 00 13 00 00 00 0c 81 00 00 00 00 05 00 00 03 fe 00 00 02 00 14 00 00 04 13 ... 28 more bytes>,
    //         _clientEncoding: 'utf8',
    //         _catalogLength: 3,
    //         _catalogStart: 10,
    //         _schemaLength: 0,
    //         _schemaStart: 14,
    //         _tableLength: 0,
    //         _tableStart: 15,
    //         _orgTableLength: 0,
    //         _orgTableStart: 16,
    //         _orgNameLength: 0,
    //         _orgNameStart: 23,
    //         characterSet: 63,
    //         encoding: 'binary',
    //         name: 'NOW()',
    //         columnLength: 19,
    //         columnType: 12,
    //         type: 12,
    //         flags: 129,
    //         decimals: 0
    //       }
    //     ]
    //   ]
    // return res.status(200).json(rows[0]['NOW()'])
    // console.log(rows)
    // console.log('por que no se imprime nada', req.url)
    // return res.status(200).json("Getting posts")
}

const getPosts = async(req, res) => {
    const [result] = await pool.query('SELECT * FROM Posts');
    console.log(result)
    return res.status(200).json(result);
}

const savePost = async (req, res) => {
    console.log('creating a post')
    const { title, description } = req.body
    const [result] = await pool.query('INSERT INTO Posts SET ?', {
        title,
        description
    })
    console.log(result)
    return res
        .status(200)
        .json({ title, description, id: result.insertId });
}