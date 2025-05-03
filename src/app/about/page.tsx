import  fs from 'fs';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Thi is about page",
};

export default function About() {
  fs.readFileSync('src/about/page.tsx','utf-8')
  return (
    <div>About</div>
  )
}
