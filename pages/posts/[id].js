import Layout from '../../components/Layout'
import axios from 'axios'

export default function PostView({post}) {
    return (
        <Layout>
            <h1>Post Details</h1>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
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