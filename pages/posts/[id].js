import Layout from '../../components/Layout'
import axios from 'axios'

export default function PostView({post}) {
    return (
        <Layout>
            <div className='text-gray-500'>
                <h2 className="text-4xl py-5 text-blue-600 text-center font-bold">Post Details</h2>
            </div>
            <div className='mx-auto' >
                <h2 className='text-gray-600'>{post.title}</h2>
                <p className='italic text-gray-800'>{post.description}</p>
            </div>
        </Layout>
    )
}


export const getServerSideProps = async (context) => {
    // del lado del backend se usan rutas absolutas
    const { data: post } = await axios.get('http://localhost:3000/api/posts/' + context.query.id)
    return {
        props: {
            post,
        }
    }
}