// middleware.ts
import { NextRequest, NextResponse } from "next/server"

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const response = NextResponse.next()

  if (pathname === "/profile") {
    //! redirect to /api
    // return NextResponse.redirect(new URL("/api", request.url))
  }

  //! Handle /dashboard
  if (pathname.startsWith("/dashboard")) {
    // response.headers.set("X-Dashboard", "true")
    // return response
  }

  //! Handle theme cookie for /settings
  if (pathname.startsWith("/settings")) {
    // const themePreference = request.cookies.get("theme")

    // if (!themePreference) {
    //   response.cookies.set("theme", "dark", { path: "/" })
    // }

    // return response
  }


  if (pathname.startsWith("/admin")) {
    // const isLoggedIn = request.cookies.get("auth")?.value === "true"
    // if (!isLoggedIn) {
    //   return NextResponse.redirect(new URL("/", request.url))
    // }
    // return response
  }

  return response
}

export const config = {
    matcher: [
      "/profile",
      "/dashboard/:path*",
      "/settings/:path*",
      "/admin/:path*"
    ]
  }
  

// import { NextRequest, NextResponse } from "next/server";
// //? firts

// export default function Middleware(request:NextRequest){
//     // if(request.nextUrl.pathname === '/profile'){
//     //     //? redirect
//     //     return NextResponse.redirect(new URL('/api',request.url))
//     //     //? rewrite
//     //     // return NextResponse.rewrite(new URL('/api',request.url))
//     // }
//     //?
//     // return NextResponse.redirect(new URL('/',request.url))
//     //? using header and cookies
//     const response = NextResponse.next()
//     const themePreference = request.cookies.get('theme')
//     console.log(response)
//     console.log(themePreference)
//     // if(!themePreference){
//     //     response.cookies.set('theme','dark')
//     // }
//     // response.headers.set('custom','home')
    
// }
// // export const config ={
// //     matcher:'/profile'
// // }