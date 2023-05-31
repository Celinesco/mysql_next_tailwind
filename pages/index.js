import Layout from '../components/Layout';
import axios from 'axios';


export default function Home({ posts }) {

  return (
    <Layout>
  <h1 className='text-3xl font-bold '>Hello World</h1>
      {posts.map(post=> (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.description}</p>
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
