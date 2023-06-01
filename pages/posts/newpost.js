import Layout from '../../components/Layout';
import { PostForm } from '../../components/PostForm'

export default function NewPost ({sectionTitle = 'New Post'}) {
    return (
        <Layout>
         <h1>{sectionTitle}</h1>
         <PostForm />
        </Layout>
    )
}