import { NextRequest } from 'next/server'
import {commentData} from './data'
export async function GET(request:NextRequest){
    const searchParams = await request.nextUrl.searchParams
    const query = searchParams.get('query')
    if(!query){
        return  Response.json(commentData)
    }
    const filterComment =  commentData.filter((a)=>a.text.includes(query))

    // return new Response('Api folly')
    return  Response.json(filterComment)
}
export async function GETALL(){

    // return new Response('Api folly')
    return  Response.json(commentData)
}
export async function POST(request:Request){
   
    const {text}  = await request.json()
    const postLength = commentData.length + 1
    const newComment = {
        text:text,
        id:postLength
    }
    commentData.push(newComment)
    return new Response(JSON.stringify(commentData),{
        headers:{
            'Content-Type':'application/json'
        },
        status:201
    })
}

export async function PUT(){
    return new Response('Api folly')
}