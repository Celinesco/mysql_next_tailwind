import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export function PostForm() {

    const router = useRouter();
    // con router.query puedo acceder a la info que tengo en la url. Osea.. las queries
    // console.log(router.query)



    useEffect(() => {
        const getProduct = async (id) => {
            const { data } = await axios.get('/api/posts/' + id);
            setPost({ title: data.title, description: data.description })
            return
        }
        if (router.query?.id) {
            // console.log('QUERY', router.query.id)
            getProduct(router.query.id)
        }
    }, [])

    const [post, setPost] = useState({
        title: "",
        description: ""
    });

    const handleChange = ({ target: { name, value } }) => {
        setPost({ ...post, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (router.query.id) {
                await axios.put('/api/posts/' + router.query.id, post)
            }
            else {
                await axios.post('/api/posts', post);
            }

            router.push('/')

        } catch (err) {
            console.log(err)
        }


    }

    return (
        <div className="bg-white p-10 mx-auto w-3/4 max-w-xs shadow-md rounded text-gray-600 dark:bg-gray-600 dark:text-white">
            <form onSubmit={handleSubmit} className="flex flex-col">

                <label htmlFor="title">Title:</label>
                <input
                    className="my-2 rounded shadow border p-2 dark:bg-black"
                    type="text" id="title"
                    name="title" onChange={handleChange}
                    value={post.title ? post.title : ""}></input>
                <label htmlFor="description">Description</label>
                <textarea
                    onChange={handleChange}
                    className="my-2 rounded shadow border p-2 dark:bg-black h-200"
                    id='description'
                    name="description"
                    value={post.description}></textarea>


                <button className='bg-pink-600 hover:bg-cyan-400 rounded focus:outline-none'>{router.query.id ? 'Update' : 'Save'}</button>
            </form>
        </div>
    )
}