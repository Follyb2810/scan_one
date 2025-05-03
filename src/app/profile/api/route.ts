import { cookies, headers } from "next/headers"
import { redirect } from "next/navigation"
import {type NextRequest } from "next/server"

export async function GET(request:NextRequest){
    //?1 getting heder
    const header = new Headers(request.headers)
    //? //?1 setting cookies
    const theme = request.cookies.get('theme')
    console.log(theme)
    console.log(header.get('Authorization'))
    return new Response('<h1>Profile folly</h1>',{
        //?1 setting heder
        headers:{
            'Content-Type':'text/html',
            'Set-Cookie':'name=folly'
        }
    })
}
export async function GETREDIRECT(){
    //! redirec
    redirect('/user/new_v2')
}
export async function GETTWO(){
    //! 2 getting heder
    const header = await headers()
    console.log(header.get('Authorization'))
    //! 2 getting cookies 
    const cookieStore = await cookies()
    console.log(cookieStore.get('theme'))
    console.log(cookieStore.get('resultPerPage'))
    console.log(cookieStore.set('resultPerPage','20'))
    return new Response('Profile folly')
}
export async function POST(){
    return new Response('Profile folly')
}

export async function PUT(){
    return new Response('Profile folly')
}