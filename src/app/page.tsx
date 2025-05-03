import Link from "next/link";


export default function Home() {
  
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Work with Ethers</h1>
      <Link href='/blog'>Blog</Link>
      <Link href='/product' >Product</Link>
      <Link href='/product' >Product</Link>
      <Link href='/articles/breaking-news-123?lang=eng' >Read in English</Link>
      <Link href='/articles/breaking-news-123?lang=fr' >Read in French</Link>
      <Link href='/product' >Product</Link>
    </div>
  );
}
