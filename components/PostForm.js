import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/router';

export function PostForm() {

    const router = useRouter();

    const [post, setPost] = useState({
        title: "",
        description:""
      });
      const handleChange = ({target: {name, value}}) => {
        setPost({...post, [name]: value})
      }

   const  handleSubmit = async(e) => {
        e.preventDefault();
        console.log('creating product')
        const res = await axios.post('/api/posts', post)
        router.push('/')
        console.log(res)
    }
    
    return (
        <div className="bg-white p-10  w-full max-w-xs shadow-md rounded">
            <h3 className='mb-3'>Enter your new post here</h3>
            <form onSubmit={handleSubmit} className="flex flex-col">

                <label htmlFor="title">Title:</label>
                <input className="my-2 rounded shadow border py-2" type="text" id="title" name="title" onChange={handleChange}></input>
                <label htmlFor="description">Description</label>
                <textarea onChange={handleChange} className="my-2 rounded shadow border py-2" id='description' name="description"></textarea>


                <button className='bg-cyan-200 hover:bg-cyan-400 rounded focus:outline-none'>Save</button>
            </form>
        </div>
    )
}