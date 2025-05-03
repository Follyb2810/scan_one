import React from 'react'
import { TransactionColumn } from './AccountHistory'
import { Eye } from 'lucide-react'
import Link from 'next/link'

export interface TInternalTransaction {
  hash: string
  traceId: string
  timestamp: string
  from: string
  to: string
  value: string
  gasUsed: string
  isError: string
  gas: string
}

interface InternalProps {
  internalAddress: TInternalTransaction[]
  handleClick: () => void
}

export default function Internal({ internalAddress, handleClick }: InternalProps) {
  const isEmpty = internalAddress.length === 0;
  return (
    <section className="overflow-x-auto">
      {isEmpty ? (
        <div className="p-6 text-center text-gray-500 font-medium">No transactions found.</div>
      ) : (
        
      <div className="flex gap-4 p-4 text-xs text-gray-800">
        
        <TransactionColumn title="Hash">
          {internalAddress.map((account, index) => (
            <div key={index} className="flex items-center gap-1">
              <Eye />
              <p className="truncate p-2 border-b">{account.hash.slice(0, 10)}...</p>
            </div>
          ))}
        </TransactionColumn>

        <TransactionColumn title="Trace Id">
          {internalAddress.map((account, index) => (
            <div key={index} className="flex items-center gap-1">
              <Eye />
              <p className="truncate p-2 border-b">{account.traceId}...</p>
            </div>
          ))}
        </TransactionColumn>

        <TransactionColumn title="Timestamp">
          {internalAddress.map((account, index) => (
            <div key={index} className="flex items-center gap-1">
              <Eye />
              <p className="truncate p-2 border-b">{account.timestamp}...</p>
            </div>
          ))}
        </TransactionColumn>

        <TransactionColumn title="From">
          {internalAddress.map((account, index) => (
            <Link
              onClick={handleClick}
              href={{ pathname: '/ether/account', query: account.from }}
              key={index}
              className="truncate p-2 border-b"
            >
              {account.from.slice(0, 19)}...
            </Link>
          ))}
        </TransactionColumn>

        <TransactionColumn title="To">
          {internalAddress.map((account, index) => (
            <div key={index} className="flex items-center gap-1">
              <Eye />
              <p className="truncate p-2 border-b">{account.to.slice(0, 10)}...</p>
            </div>
          ))}
        </TransactionColumn>

        <TransactionColumn title="Value">
          {internalAddress.map((account, index) => (
            <div key={index} className="flex items-center gap-1">
              <Eye />
              <p className="truncate p-2 border-b">{account.value.slice(0, 10)}...</p>
            </div>
          ))}
        </TransactionColumn>

        <TransactionColumn title="Gas Used">
          {internalAddress.map((account, index) => (
            <div key={index} className="flex items-center gap-1">
              <Eye />
              <p className="truncate p-2 border-b">{account.gasUsed}</p>
            </div>
          ))}
        </TransactionColumn>

        <TransactionColumn title="Is Error">
          {internalAddress.map((account, index) => (
            <div key={index} className="flex items-center gap-1">
              <Eye />
              <p className="truncate p-2 border-b">{account.isError}</p>
            </div>
          ))}
        </TransactionColumn>

        <TransactionColumn title="Gas">
          {internalAddress.map((account, index) => (
            <div key={index} className="flex items-center gap-1">
              <Eye />
              <p className="truncate p-2 border-b">{account.gas}</p>
            </div>
          ))}
        </TransactionColumn>
      </div>
      )}
    </section>
  )
}
