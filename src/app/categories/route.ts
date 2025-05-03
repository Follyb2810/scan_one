//? cache
export const dynamic = 'force-static'
const categories =[
    {id:1,name:'a'},
    {id:2,name:'b'},
    {id:3,name:'c'},
    {id:4,name:'d'},
    {id:5,name:'f'}
]

export async function GET(){
 return Response.json(categories)   
}

