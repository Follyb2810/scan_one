// "use client"
// import { useEffect, useState } from "react"

type IUser ={
    id:string
    name:string
email:string
    username:string
    phone:string
}

export default async function UserServer() {
    await new Promise((resolve)=>setTimeout(resolve,2000))
    const response = await fetch(`http://jsonplaceholder.typicode.com/users`)
    const users:IUser[] =await response.json()
    
  return (
    <div>
        <ul className="space-y-4 p-4">
            {
                users.map((user,index)=>(
                    <li className="p-4 shadow-md rounded-lg-text-gray-700" key={index}>
                        <div className="font-bold">{user.name}</div>
                        <div className="text-sm">
                            <div className="">{user.phone}</div>
                            <div className="">{user.username}</div>
                            <div className="">{user.email}</div>
                        </div>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}
