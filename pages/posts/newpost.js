import Layout from '../../components/Layout';
import { PostForm } from '../../components/PostForm'

export default function NewPost ({sectionTitle = 'New Post'}) {
    return (
        <>
          <h2 className="text-4xl py-5 text-blue-600 text-center font-bold">Edit post</h2>
            <PostForm />
        </>
    )
}