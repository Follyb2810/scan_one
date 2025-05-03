import { Suspense } from "react"
import AuthorComponent from "./author"
export 
type IPost ={
    title:string
    body:string
    userId:number
    id:number
    
}
export default async function page() {
    const response = await fetch(`http://jsonplaceholder.typicode.com/posts`)
    const posts:IPost[] =await response.json()
    const filterPost = posts.filter((post)=>post.id % 10 === 1)
  return (
    <div className="p-4 max-w-7xl mx-auto">
        <div className="text-3xl font-extrabold mb-3">Blog Post</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {
                filterPost.map((post,index)=>(
                    <div className="bg-white rounded-lg shadow-md p-6" key={index}>
                        <h2 className="font-bold text-2xl mb-3 text-gray-200 leading-tight">{post.title}</h2>
                        <p className="text-gray-800 mb-4 leading-relaxed">{post.body}</p>
                        <p>Author to be fetche</p>
                        <Suspense fallback={<h1 className="text-sm text-gray-400">Loading author name...</h1>}>
                            
                        <AuthorComponent authorId={post.userId}/>
                        </Suspense>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
