import React from 'react'
import Link from 'next/link'
import { TransactionColumn } from './AccountHistory'

export interface TERC21Token {
  hash: string
  blockNumber: string
  timeStamp: string
  from: string
  to: string
  value: string
  gasUsed: string
  tokenName: string
  contractAddress?: string | null
  input?: string | null
  symbol: string
  tokenDecimal: string
  transactionIndex: string
  nonce: string
  txreceipt_status: string
  // blockHash: string
  // confirmation: string
  // cumulativeGasUsed: string
  // gas: string
  // type: string
  // traceId: string
  // isError: string
}
interface ERC21TokenProps {
  ERC20: TERC21Token[]
  // handleClick: () => void
}
export default function ERC20Token({ ERC20 }:ERC21TokenProps) {
  return (
    <section>
      {ERC20.length === 0 ? (
        <div>There is no data ERC</div>
      ) : (
        <div>
         <TransactionColumn title="Hash">
          {ERC20.map((account, index) => (
            <p key={index} className="truncate">{account.hash.slice(0, 10)}...</p>
          ))}
        </TransactionColumn>

         

        <TransactionColumn title="Block">
          {ERC20.map((account, index) => (
            <Link
              key={index}
              href={{ pathname: "/ethers/block", query: account.blockNumber }}
              passHref
            >
              <a className="text-blue-600 hover:underline" >
                {account.blockNumber}
              </a>
            </Link>
          ))}
        </TransactionColumn>

        <TransactionColumn title="Timestamp">
          {ERC20.map((account, index) => (
            <p key={index}>{account.timeStamp}</p>
          ))}
        </TransactionColumn>

        <TransactionColumn title="From">
          {ERC20.map((account, index) => (
            <p key={index} className="truncate">{account.from.slice(0, 10)}...</p>
          ))}
        </TransactionColumn>

        <TransactionColumn title="To">
          {ERC20.map((account, index) => (
            <Link
              key={index}
              href={{ pathname: "/ethers/account", query: account.to }}
              passHref
            >
              <a className="text-blue-600 hover:underline" >
                {account.to.slice(0, 10)}...
              </a>
            </Link>
          ))}
        </TransactionColumn>

        <TransactionColumn title="Value">
          {ERC20.map((account, index) => (
            <p key={index}>{account.value.slice(0, 5)}...</p>
          ))}
        </TransactionColumn>
        <TransactionColumn title="Gas Used">
          {ERC20.map((account, index) => (
            <p key={index}>{account.gasUsed}</p>
          ))}
        </TransactionColumn>

        <TransactionColumn title="Token Name">
          {ERC20.map((account, index) => (
            <p key={index} className="truncate">{account.tokenName}...</p>
          ))}
        </TransactionColumn>

        <TransactionColumn title="Contrcat Address">
          {ERC20.map((account, index) => (
            <p key={index}>{account.contractAddress ?? 'no contract adress'}</p>
          ))}
        </TransactionColumn>

        <TransactionColumn title="Input">
          {ERC20.map((account, index) => (
            <p key={index}>{account.input}</p>
          ))}
        </TransactionColumn>

        <TransactionColumn title="Symbol">
          {ERC20.map((account, index) => (
            <p key={index}>{account.symbol}</p>
          ))}
        </TransactionColumn>

        <TransactionColumn title="Token decimal">
          {ERC20.map((account, index) => (
            <p key={index}>{account.tokenDecimal}</p>
          ))}
        </TransactionColumn>

        <TransactionColumn title="Nonce">
          {ERC20.map((account, index) => (
            <p key={index}>{account.nonce}</p>
          ))}
        </TransactionColumn>

        <TransactionColumn title="Index">
          {ERC20.map((account, index) => (
            <p key={index}>{account.transactionIndex}</p>
          ))}
        </TransactionColumn>

        <TransactionColumn title="Status">
          {ERC20.map((account, index) => (
            <p key={index}>{account.txreceipt_status}</p>
          ))}
        </TransactionColumn>
        </div>
      )}
    </section>
  )
}
