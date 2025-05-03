// import { PrismaClient } from "./generated/prisma";

import { PrismaClient } from "./../prisma/generated/prisma";

// import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const seedProduct = async () => {
  const count = await prisma.product.count();

  if (count === 0) {
    await prisma.product.createMany({
      data: [
        {
          title: "This is title one",
          price: 1,
          description: "This is description 1",
        },
        {
          title: "This is title two",
          price: 2,
          description: "This is description 2",
        },
        {
          title: "This is title three",
          price: 3,
          description: "This is description 3",
        },
        {
          title: "This is title four",
          price: 4,
          description: "This is description 4",
        },
      ],
    });
    console.log("Seeded products ✅");
  } else {
    console.log("Products already exist 🚫");
  }
};

seedProduct().catch((err) => {
  console.error(err);
  process.exit(1);
});
export const getAllProduct = async()=>{
    await new Promise((resolve)=>setTimeout(resolve,1000))
    return prisma.product.findMany()
}
export const getProduct = async(id:number)=>{
    await new Promise((resolve)=>setTimeout(resolve,1000))
    return prisma.product.findUnique({
        where:{id}
    })
}
export const deleteProduct = async(id:number)=>{
    await new Promise((resolve)=>setTimeout(resolve,1000))
    return prisma.product.delete({
        where:{id}
    })
}
export const addProduct = async(title:string,description:string,price:number)=>{
    await new Promise((resolve)=>setTimeout(resolve,1000))
    return prisma.product.create({
        data:{title,description,price}
    })
}
export const updateProduct = async(id:number,title:string,description:string,price:number)=>{
    await new Promise((resolve)=>setTimeout(resolve,1000))
    return prisma.product.update({
        where:{id},
        data:{title,description,price}
    })
}


