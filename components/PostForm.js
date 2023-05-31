import axios from 'axios';
import { useState } from 'react';

export function PostForm() {

    const [post, setPost] = useState({
        title: "",
        description:""
      });
      const handleChange = ({target: {name, value}}) => {
        console.log(name, value);
        setPost({...post, [name]: value})
      }

   const  handleSubmit = async(e) => {
        e.preventDefault();
        console.log('creating product')
        const res = await axios.post('/api/posts', post)

        console.log(res)
    }
    
    return (
        <div className="bg-blue-500 p-10  shadow-md rounded">
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