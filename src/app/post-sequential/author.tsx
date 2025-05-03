type IAuthor = {
    id: number
    name: string
  }
  
  export default async function AuthorComponent({ authorId }: { authorId: number }) {
    try {
      await new Promise((_, reject) => setTimeout(() => reject(new Error('Intentional fail')), 1000))
  
      const response = await fetch(`http://jsonplaceholder.typicode.com/users/${authorId}`)
      const author: IAuthor = await response.json()
  
      return (
        <div className="text-sm text-gray-500">
          Writer <span className="font-semibold text-gray-700 hover:text-blue-200">{author.name}</span>
        </div>
      )
    } catch (err: any) {
      return (
        <div className="text-red-500 text-sm">
          ⚠️ Error: {err.message || 'Something went wrong'}
        </div>
      )
    }
  }
//   reject({ msg: 'Failed on purpose' })
// } catch (err: any) {
//     return (
//       <div className="text-red-500 text-sm">
//         ⚠️ Error: {err.msg || err.message || 'Something went wrong'}
//       </div>
//     )
//   }
  