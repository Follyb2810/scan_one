"use client"
import { useEffect, useState } from "react"

type IUser ={
    id:string
    name:string
email:string
    username:string
    phone:string
}

export default function UserClient() {
    const [user, setUser] = useState<IUser[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>('')
    
    useEffect(() => {
      const fetchUser = async()=>{
        setLoading(true)
        try {
            const result = await fetch(`http://jsonplaceholder.typicode.com/users`)
            if(!result.ok){
                throw new Error('error fatching')
            }
            const data = await result.json()
            setUser(data)
        } catch (error) {
            if(error instanceof Error){
                setError(error.message)
            }else{
                setError('unknown type')
            }
            
        }finally{
            setLoading(false)
        }
      }
      fetchUser()
      return () => {
        
      }
    }, [])
    
    if(loading) return <h1>loading</h1>
    if(error) return <h1>error:{error}</h1>
  return (
    <div>
        <ul className="space-y-4 p-4">
            {
                user.map((users,index)=>(
                    <li className="p-4 shadow-md rounded-lg-text-gray-700" key={index}>
                        <div className="font-bold">{users.name}</div>
                        <div className="text-sm">
                            <div className="">{users.phone}</div>
                            <div className="">{users.username}</div>
                            <div className="">{users.email}</div>
                        </div>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}
