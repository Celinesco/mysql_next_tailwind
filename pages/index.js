import Layout from '../components/Layout';
import axios from 'axios';
// import { MdsOutlinedVisibility } from 'react-icons/md';
import { RiEyeFill } from 'react-icons/ri';
import { TrashIcon, PencilIcon } from '@heroicons/react/24/solid'
import Link from 'next/link';




export default function Home({ posts }) {

  const handleDelete = async(id) => {
    // del lado del front end se usan rutas relativas
    const res = await axios.delete('/api/posts/' + id)
    console.log('tu post fue eliminado :(')
  }

  return (
    <Layout>
      <h1 className='text-3xl font-bold '>Hello World</h1>
      <div className='w-full flex justify-end' >
        <Link href={'/posts/newpost'}>
          <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">New Post</div>
        </Link>
       
      </div>
      
      {posts.map(post => (
        <div key={post.id} className='border border-gray-200 shadow my-6 p-10 flex justify-between bg-white'>
          <div>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
          </div>
          <div className='flex'>
            <Link href={`/posts/${post.id}`}>
              <div className="text-purple-500  hover:bg-gray-100 focus:ring-1 focus:outline-none w-9 h-9 rounded-full p-2 flex items-center hover:shadow justify-center">
                <RiEyeFill className="w-5 h-5" />
              </div>
            </Link>
            <button type="button" className="text-red-400  hover:bg-gray-100 focus:ring-1 focus:outline-none w-9 h-9 rounded-full p-2 flex items-center hover:shadow justify-center" onClick={()=>handleDelete(post.id)}>
              <TrashIcon />
            </button>
            <Link href={`/posts/edit/${post.id}`}>
            <div className="text-yellow-400  hover:bg-gray-100 focus:ring-1  w-9 h-9 rounded-full p-2 flex items-center hover:shadow justify-center" >
              <PencilIcon />
            </div>
            </Link>
           
          </div>


        </div>
      ))}
    </Layout>

  )
}


export const getServerSideProps = async (context) => {
  const { data: posts } = await axios.get('http://localhost:3000/api/posts')
  console.log(posts)
  return {
    props: {
      posts,
    }
  }
}
