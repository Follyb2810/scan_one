"use client";
import React from "react";
import Link from "next/link";
import { Github, Twitter, Linkedin, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 px-4 py-10 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div>
          <h2 className="text-2xl font-bold text-white">Folly</h2>
          <p className="text-sm mt-2 text-gray-400">
            Explore Ethereum data with real-time price and contract insights.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-blue-400">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-400">About</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-400">Contact</Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-blue-400">Terms</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Follow Us</h3>
          <div className="flex gap-4">
            <Link href="https://github.com" target="_blank" className="hover:text-blue-400">
              <Github size={20} />
            </Link>
            <Link href="https://twitter.com" target="_blank" className="hover:text-blue-400">
              <Twitter size={20} />
            </Link>
            <Link href="https://linkedin.com" target="_blank" className="hover:text-blue-400">
              <Linkedin size={20} />
            </Link>
            <Link href="https://facebook.com" target="_blank" className="hover:text-blue-400">
              <Facebook size={20} />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-4 text-sm text-center text-gray-500">
        © {new Date().getFullYear()} Folly. All rights reserved.
      </div>
    </footer>
  );
}
