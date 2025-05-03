import AuthorComponent from "@/app/post-sequential/author";
import { IPost } from "@/app/post-sequential/page";
import { Suspense } from "react";

type IAlbum = {
  userId: number;
  id: number;
  title: string;
};
export async function getUserPost(userId: string) {
    // console.log(userId)
    await new Promise((resolve)=>setTimeout(resolve,1000))
  const response = await fetch(
    `http://jsonplaceholder.typicode.com/posts?userId=${userId}`
    // `http://jsonplaceholder.typicode.com/posts?userId=1`
  );
  return response.json();
}
export async function getUserAlbum(userId: string) {
    // console.log(userId)
        await new Promise((resolve)=>setTimeout(resolve,1000))
  const response = await fetch(
    `http://jsonplaceholder.typicode.com/albums?userId=${userId}`
    // `http://jsonplaceholder.typicode.com/albums?userId=1`
  );
  return response.json();
}
export default async function UserProfile({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const userPost =await getUserPost(id);
  const userAlbum = getUserAlbum(id);
  const [posts, albums] = await Promise.all([userPost, userAlbum]);
//   console.log(posts)
//   console.log(albums)
  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-extra-bold">User Profile</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Post</h2>
          <div className="space-y-4">
            {posts.map((post: IPost, index: number) => (
              <div className="bg-white rounded-lg shadow-md p-6" key={index}>
                <h2 className="font-bold text-2xl mb-3 text-gray-200 leading-tight">
                  {post.title}
                </h2>
                <p className="text-gray-800 mb-4 leading-relaxed">
                  {post.body}
                </p>
                <p>Author to be fetche</p>
                <Suspense
                  fallback={
                    <h1 className="text-sm text-gray-400">
                      Loading author name...
                    </h1>
                  }
                >
                  <AuthorComponent authorId={post.userId} />
                </Suspense>
              </div>
            ))}
          </div>
        </div>
        <div>
            <h2 className="text-2xl font-bold mb-4">Album</h2>
            {
                albums.map((album:IAlbum,index:number)=>(
                    <div className="bg-white rounded-lg shadow-md p-6" key={index}>
                       <p className="text-gray-700">{album.title}</p> 
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  );
}
