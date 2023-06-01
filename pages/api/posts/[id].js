import {pool} from '../../../config/db';

export default async function handler (req, res) {
    console.log(req.method)
    switch(req.method) {
        case 'GET':
            return await getPost(req, res);
        case 'DELETE':
            return await deletePost(req, res);
        case 'PUT':
            console.log("request body", req.body)
            console.log("request method", req.method)
            return await updatePost(req,res);
        default:
            break;
    }
}



const getPost = async (req, res) => {
    const {id} = req.query;
    const [result] = await pool.query('SELECT * FROM Posts WHERE id = ?', [id])
    return res.status(200).json(result[0])
}

const updatePost = async (req, res) => {
    const {id} = req.query;
    const {title, description} = req.body
    const result = await pool.query('UPDATE Posts SET title = ?, description = ? WHERE id = ?', [title, description, id]);
    return res.status(204).json()
}

const deletePost = async (req, res) => {
    const {id} = req.query;
    await pool.query('DELETE FROM Posts WHERE id = ?', [id]);
    return res.status(204).json()
}