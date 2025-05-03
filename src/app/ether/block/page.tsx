'use client'

import React, { useEffect, useState } from 'react'
import { useEther } from '../_component/EtherContext'
import { useSearchParams } from 'next/navigation'
import { ethers, Block } from 'ethers'
import { TransactionColumn } from '../_component/AccountHistory'
import Link from 'next/link'

export default function BlockPage() {
  const { provider } = useEther()
  const searchParams = useSearchParams()
  const blockNumber = searchParams?.keys().next().value

  const [blockData, setBlockData] = useState<Block | null>(null)
  const [transactions, setTransactions] = useState<string[]>([])
  const [ethGasLimit, setEthGasLimit] = useState('')
  const [ethGasUsed, setEthGasUsed] = useState('')
  const [ethDifficulty, setEthDifficulty] = useState('')
  const [showBlockInfo, setShowBlockInfo] = useState(true)

  const toggleTab = () => {
    setShowBlockInfo(!showBlockInfo)
  }

  const getBlock = async () => {
    if (!provider || !blockNumber) return

    try {
      const block = await provider.getBlock(blockNumber)
      if (!block) return

      setBlockData(block)
      // setTransactions(block.transactions)
      setTransactions([...block.transactions])

      setEthGasLimit(ethers.formatEther(block.gasLimit))
      setEthGasUsed(ethers.formatEther(block.gasUsed))
      setEthDifficulty(ethers.formatEther(block.difficulty))
    } catch (error) {
      console.error('Failed to fetch block:', error)
    }
  }

  useEffect(() => {
    getBlock()
  }, [])

  return (
    <section className="overflow-x-auto p-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 xl:grid-cols-7 gap-4 text-sm text-gray-800">
        <TransactionColumn title="Block Number">
          <p className="truncate">{blockNumber}</p>
        </TransactionColumn>

        <div className="col-span-full flex gap-4 mb-4">
          <button
            onClick={toggleTab}
            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
          >
            {showBlockInfo ? 'Show Transactions' : 'Show Block Details'}
          </button>
        </div>

        {showBlockInfo && blockData ? (
          <>
            <TransactionColumn title="Number">
              <p>{blockData.number}</p>
            </TransactionColumn>
            <TransactionColumn title="Timestamp">
              <p>{new Date(blockData.timestamp * 1000).toLocaleString()}</p>
            </TransactionColumn>
            <TransactionColumn title="Miner">
              <Link href={{ pathname: '/ethers/account', query: blockData.miner }}>
                <a className="text-blue-600 hover:underline truncate">{blockData.miner}</a>
              </Link>
            </TransactionColumn>
            <TransactionColumn title="Hash">
              <p className="truncate">{blockData.hash}</p>
            </TransactionColumn>
            <TransactionColumn title="Parent Hash">
              <p className="truncate">{blockData.parentHash}</p>
            </TransactionColumn>
            <TransactionColumn title="Nonce">
              <p>{blockData.nonce}</p>
            </TransactionColumn>
            <TransactionColumn title="Extra Data">
              <p>{blockData.extraData}</p>
            </TransactionColumn>
            <TransactionColumn title="Difficulty">
              <p>{blockData.difficulty.toString()}</p>
            </TransactionColumn>
            <TransactionColumn title="Gas Limit (ETH)">
              <p>{ethGasLimit}</p>
            </TransactionColumn>
            <TransactionColumn title="Gas Used (ETH)">
              <p>{ethGasUsed}</p>
            </TransactionColumn>
            <TransactionColumn title="Formatted Difficulty (ETH)">
              <p>{ethDifficulty}</p>
            </TransactionColumn>
          </>
        ) : (
          <TransactionColumn title={`Transactions (${transactions.length})`}>
            {transactions.map((txHash, index) => (
              <div key={index} className="flex items-center gap-2">
                <span>{index + 1}.</span>
                <Link href={{ pathname: '/ethers/transaction', query: txHash }}>
                  <a className="text-blue-600 hover:underline truncate">{txHash}</a>
                </Link>
              </div>
            ))}
          </TransactionColumn>
        )}
      </div>
    </section>
  )
}
