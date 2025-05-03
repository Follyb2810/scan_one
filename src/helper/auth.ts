// import { NextRequest, NextResponse } from 'next/server'

// export function auth(request: NextRequest) {
//   const isLoggedIn = request.cookies.get('auth')?.value === 'true'
//   if (!isLoggedIn) {
//     return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
//   }
//   return null 
// }
// // app/api/buy_from_cart/route.ts
// import { NextRequest, NextResponse } from 'next/server'
// import { auth } from '@/lib/middleware/auth'
// import { checkStock } from '@/lib/middleware/checkStock'
// import { checkCart } from '@/lib/middleware/checkCart'

// export async function POST(request: NextRequest) {
//   // Run auth
//   const authRes = auth(request)
//   if (authRes) return authRes

//   // Run checkStock
//   const stockRes = checkStock(request)
//   if (stockRes) return stockRes

//   // Run checkCart
//   const cartRes = checkCart(request)
//   if (cartRes) return cartRes

//   // Business logic here
//   return NextResponse.json({ message: 'Product purchased successfully' })
// }
// // lib/utils/runMiddlewares.ts
// export async function runMiddlewares(
//     request: NextRequest,
//     middlewares: ((req: NextRequest) => Response | null | Promise<Response | null>)[]
//   ) {
//     for (const middleware of middlewares) {
//       const result = await middleware(request)
//       if (result) return result
//     }
//     return null
//   }
// // Inside your route.ts
// const failRes = await runMiddlewares(request, [auth, checkStock, checkCart])
// if (failRes) return failRes
  
