import Link from 'next/link'
// import React, { use } from 'react'

export default async function ArticleId({params,searchParams}:{
            params:Promise<{articleId:string}>;
            searchParams:Promise<{lang?:'eng'|'fr'}>
        
        }) {
    // server
   const {articleId} = await params
   const {lang='eng'} = await searchParams
    // client
//    const {articleId} = use(params) 
//    const {lang='eng'} = use(searchParams) 
    return (
    <div>
        <span>ArticleId {articleId}</span>
        <h3>Reading in {lang}</h3>
        <div>
        <Link href={`/articles/${articleId}?lang=eng`} >Read in English</Link>
        <Link href={`/articles/${articleId}?lang=fr`} >Read in French</Link>
        </div>
    </div>
  )
}
