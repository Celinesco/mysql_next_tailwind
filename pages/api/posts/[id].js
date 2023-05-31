
export default async function handler (req, res) {
    console.log('por que no se imprime nada',req.query)
    return res.status(200).json(`Getting the ${req.query.id} posts`)
}