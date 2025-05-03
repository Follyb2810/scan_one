"use client";
import React, {  useState } from "react";
import { useEther } from "./_component/EtherContext";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { ethers } from "ethers";
import { useRouter } from "next/navigation";

export default function Ethers() {
  const [userAccount, setUserAccount] = useState("");
  const { blockTransactions, transaction } = useEther();
  const router = useRouter();

  const convertToEth = (amount: string | undefined) => {
    if (!amount) return "0";
    return ethers.formatUnits(amount, "gwei") + " Gwei";
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // alert('you submitting'+ userAccount)
    e.preventDefault();
    if (!userAccount.trim()) return;
    router.push(`/ether/account?${userAccount.trim()}`);
  };

  return (
    <section className="  p-4 space-y-10">
      <div className="w-full">
        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-2 border p-2 rounded-md shadow-md"
        >
          <input
            type="text"
            name="address"
            placeholder="Enter ETH address"
            onChange={(e) => setUserAccount(e.target.value)}
            className="flex-1 p-2 outline-none"
          />
          <button
            type="submit"
            className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            <ChevronRight />
          </button>
        </form>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
      
      <div className="">
        <h1 className="text-2xl font-bold mb-4">Latest Blocks</h1>
        <div className="grid grid-cols-1  gap-4">
          {blockTransactions.map((block, index) => (
            <div
              key={index}
              className="p-4 border rounded-lg shadow hover:shadow-lg transition"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                  BK
                </span>
                <Link
                  href={{ pathname: "ether/block", query: block.number.toString() }}
                  className="text-sm text-blue-600 hover:underline"
                >
                  Block #{block.number}
                </Link>
              </div>
              <p className="text-gray-500 text-sm mb-1">
                Time: {new Date(block.timestamp * 1000).toLocaleString()}
              </p>
              <p className="text-sm">
                Miner:{" "}
                <Link
                  href={{ pathname: "ether/account", query: block.miner}}
                  className="text-blue-500 hover:underline"
                >
                  {block.miner.slice(0, 10)}...
                </Link>
              </p>
              <p className="text-sm">
                Transactions:{" "}
                <Link
                  href={{ pathname: "ether/transaction", query: block.number.toString() }}
                  className="text-blue-500 hover:underline"
                >
                  {block.transactions.length}
                </Link>
              </p>
              <p className="text-sm mt-2 text-green-600 font-medium">
                Base Fee: {convertToEth(block.baseFeePerGas?.toString())}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold mb-4">Latest Transactions</h3>
        <div className="grid grid-cols-1  gap-3">
          {transaction?.slice(0, 10).map((tx, index) => (
            <div
              key={index}
              className="p-3 border rounded-md shadow-sm hover:shadow-md transition"
            >
              <Link
                href={{ pathname: "ether/transaction", query: tx }}
                className="text-blue-600 hover:underline"
              >
                Hash: {tx.slice(0, 15)}...
              </Link>
            </div>
          ))}
        </div>
      </div>
      </section>
    </section>
  );
}
