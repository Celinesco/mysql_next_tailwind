import axios from 'axios';


export function PostForm() {

   const  handleSubmit = async(e) => {
        e.preventDefault();
        console.log('creating product')
        const res = await axios.post('/api/posts', {
            title:'Second Post',
            description: 'Este es el segundo post de Docker',
        })

        console.log(res)
    }
    
    return (
        <div className="bg-blue-500 p-10">
            <form onSubmit={handleSubmit} className="flex flex-col">

                <label htmlFor="title">Title:</label>
                <input className="my-2" type="text" id="title" name="title"></input>
                <label htmlFor="description">Description</label>
                <textarea  className="my-2" id='description' name="description"></textarea>


                <button>Save</button>
            </form>
        </div>
    )
}