import { addProduct } from "@/prisma-db";
import { NextRequest } from "next/server";

export async function POST(request:NextRequest){
    const {description, price, title} = await request.json()
    // const product = await addProduct(description, price, title);
    const product = await addProduct(title, description, price);

    return new Response(JSON.stringify(product),{
        headers:{
            "Content-Type":"Application/json"
        }
    })
}
export async function GET(){
    return new Response(`this is product db get`,{
        headers:{
            "Content-Type":"Application/json"
        }
    })
}