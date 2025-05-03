import React from 'react'
import { TransactionColumn } from './AccountHistory'
import Link from 'next/link'

export interface TBlockRangeTransaction {
  hash: string
  blockNumber: string
  timeStamp: string
  from: string
  to: string
  value: string
  gasUsed: string
  blockHash: string
  confirmation: string
  cumulativeGasUsed: string
  gas: string
  input?: string | null
  type: string
  traceId: string
  isError: string
  contractAddress?: string | null
}

interface BlockRangeProps {
  blockRangeTransaction: TBlockRangeTransaction[]
  handleClick: () => void
}

export default function BlockRange({ blockRangeTransaction, handleClick }: BlockRangeProps) {
  return (
    <section>
      {blockRangeTransaction.length === 0 ? (
        <div>There is no data</div>
      ) : (
        <div>
          <TransactionColumn title="Tx Hash">
            {blockRangeTransaction.map((range, index) => (
              <p key={index}  className="truncate p-2 border-b">{range.hash.slice(0, 10)}...</p>
            ))}
          </TransactionColumn>

          <TransactionColumn title="Block">
            {blockRangeTransaction.map((range, index) => (
              <Link
               className="text-blue-600 hover:underline p-2 border-b"
                key={index}
                href={{ pathname: "/ethers/block", query: range.blockNumber }}
                // passHref
                onClick={handleClick}
              >
                {/* <a className="text-blue-600 hover:underline" onClick={handleClick}> */}
                  {range.blockNumber}
                {/* </a> */}
              </Link>
            ))}
          </TransactionColumn>

          <TransactionColumn title="Timestamp">
            {blockRangeTransaction.map((range, index) => (
              <p key={index} className="truncate p-2 border-b">{range.timeStamp}</p>
            ))}
          </TransactionColumn>

          <TransactionColumn title="From">
            {blockRangeTransaction.map((range, index) => (
              <p key={index}  className="truncate p-2 border-b">{range.from.slice(0, 10)}...</p>
            ))}
          </TransactionColumn>

          <TransactionColumn title="To">
            {blockRangeTransaction.map((range, index) => (
              <Link
               className="text-blue-600 hover:underline p-2 border-b"
                key={index}
                href={{ pathname: "/ethers/account", query: range.to }}
                // passHref
                onClick={handleClick}
              >
                {/* <a className="text-blue-600 hover:underline" onClick={handleClick}> */}
                  {range.to.slice(0, 10)}...
                {/* </a> */}
              </Link>
            ))}
          </TransactionColumn>

          <TransactionColumn title="Value">
            {blockRangeTransaction.map((range, index) => (
              <p key={index} className="truncate p-2 border-b">{range.value.slice(0, 5)}...</p>
            ))}
          </TransactionColumn>

          <TransactionColumn title="Gas Used">
            {blockRangeTransaction.map((range, index) => (
              <p key={index} className="truncate p-2 border-b">{range.gasUsed}</p>
            ))}
          </TransactionColumn>

          <TransactionColumn title="BlockHash">
            {blockRangeTransaction.map((range, index) => (
              <p key={index}  className="truncate p-2 border-b">{range.blockHash.slice(0, 10)}...</p>
            ))}
          </TransactionColumn>

          <TransactionColumn title="Confirmation">
            {blockRangeTransaction.map((range, index) => (
              <p key={index} className="truncate p-2 border-b">{range.confirmation}</p>
            ))}
          </TransactionColumn>

          <TransactionColumn title="Cumulative Gas">
            {blockRangeTransaction.map((range, index) => (
              <p key={index} className="truncate p-2 border-b">{range.cumulativeGasUsed}</p>
            ))}
          </TransactionColumn>

          <TransactionColumn title="Gas">
            {blockRangeTransaction.map((range, index) => (
              <p key={index} className="truncate p-2 border-b">{range.gas}</p>
            ))}
          </TransactionColumn>

          <TransactionColumn title="Input">
            {blockRangeTransaction.map((range, index) => (
              <p key={index} className="truncate p-2 border-b" >{range.input ?? 'No Input'}</p>
            ))}
          </TransactionColumn>

          <TransactionColumn title="Types">
            {blockRangeTransaction.map((range, index) => (
              <p key={index} className="truncate p-2 border-b">{range.type}</p>
            ))}
          </TransactionColumn>

          <TransactionColumn title="Trace Id">
            {blockRangeTransaction.map((range, index) => (
              <p key={index} className="truncate p-2 border-b">{range.traceId}</p>
            ))}
          </TransactionColumn>

          <TransactionColumn title="Is Error">
            {blockRangeTransaction.map((range, index) => (
              <p key={index} className="truncate p-2 border-b">{range.isError}</p>
            ))}
          </TransactionColumn>

          <TransactionColumn title="Contract Address">
            {blockRangeTransaction.map((range, index) => (
              <p key={index} className="truncate p-2 border-b">{range.contractAddress ?? 'no contract address'}</p>
            ))}
          </TransactionColumn>
        </div>
      )}
    </section>
  )
}
