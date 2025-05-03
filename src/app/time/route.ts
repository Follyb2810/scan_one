//? for cache
export const dynamic = 'force-static'
//? revalidate cache
export const revalidate = 10


export async function GET(){
    return new Response(`${new Date().toLocaleTimeString()}`,{
        headers:{
            'Content-Type':'text/html'
        },
        status:200
    })
}