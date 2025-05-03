'use client'

import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useEther } from '../_component/EtherContext'
import { ethers, TransactionResponse } from 'ethers'
import { TransactionColumn } from '../_component/AccountHistory'
import Link from 'next/link'

export default function Transaction() {
  const searchParams = useSearchParams()
  const { provider } = useEther()

  const hash = searchParams.keys().next().value

  const [transactionData, setTransactionData] = useState<TransactionResponse | null>(null)
  const [ethGasLimit, setEthGasLimit] = useState('')
  const [gasPrice, setGasPrice] = useState('')
  const [value, setValue] = useState('')

  const getDataOfTransaction = async () => {
    try {
      const transactionDetails = await provider.getTransaction(hash!)

      if (transactionDetails) {
        setTransactionData(transactionDetails)

        const gasLimit = ethers.formatUnits(transactionDetails.gasLimit, 'wei')
        setEthGasLimit(gasLimit)

        const price = ethers.formatUnits(transactionDetails.gasPrice || 0, 'wei')
        setGasPrice(price)

        const etherValue = ethers.formatUnits(transactionDetails.value, 'ether')
        setValue(etherValue)
      }
    } catch (error) {
      console.error('Error fetching transaction:', error)
    }
  }

  useEffect(() => {
    getDataOfTransaction()
  }, [])

  if (!transactionData) {
    return <p className="p-4">Loading transaction data...</p>
  }

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 p-4 text-sm text-gray-800">
        <TransactionColumn title="Transaction Hash">
          <p>{transactionData.hash.slice(0,10)}...</p>
        </TransactionColumn>

        <TransactionColumn title="Block Number">
          <Link href={{ pathname: '/ether/block', query: transactionData.blockNumber?.toString() }}>
            <p className="text-blue-600 hover:underline truncate">
              {transactionData.blockNumber ?? 'N/A'}
            </p>
          </Link>
        </TransactionColumn>

        <TransactionColumn title="From">
          <Link href={{ pathname: '/ether/account', query: transactionData.from }}>
            <p className="text-blue-600 hover:underline truncate">{transactionData.from.slice(0,15)}</p>
          </Link>
        </TransactionColumn>

        <TransactionColumn title="To">
          <Link href={{ pathname: '/ether/account', query: transactionData.to ?? '' }}>
            <p className="text-blue-600 hover:underline truncate">{transactionData.to?.slice(0,15) ?? 'N/A'}</p>
          </Link>
        </TransactionColumn>

        <TransactionColumn title="Nonce">
          <p>{transactionData.nonce}</p>
        </TransactionColumn>

        <TransactionColumn title="Transaction Index">
          {/* <p>{transactionData.transactionIndex}</p> */}
          <p></p>
        </TransactionColumn>

        <TransactionColumn title="R">
          {/* <p>{transactionData.r}</p> */}
          <p></p>
        </TransactionColumn>

        <TransactionColumn title="S">
          {/* <p>{transactionData.s}</p> */}
          <p></p>
        </TransactionColumn>

        <TransactionColumn title="V">
          {/* <p>{transactionData.v}</p> */}
          <p></p>
        </TransactionColumn>

        <TransactionColumn title="Type">
          <p>{transactionData.type}</p>
        </TransactionColumn>

        <TransactionColumn title="Gas Price">
          <p>{gasPrice}</p>
        </TransactionColumn>

        <TransactionColumn title="Gas Limit">
          <p>{ethGasLimit}</p>
        </TransactionColumn>

        <TransactionColumn title="Value">
          <p>{value} ETH</p>
        </TransactionColumn>

        <TransactionColumn title="Chain ID">
          <p>{transactionData.chainId}</p>
        </TransactionColumn>

        <TransactionColumn title="Creates (Contract)">
          <p>{ 'N/A'}</p>
        </TransactionColumn>
      </div>
    </section>
  )
}
