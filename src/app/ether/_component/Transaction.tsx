import { Eye } from "lucide-react";
import Link from "next/link";
import React from "react";

export interface AccountTransaction {
  hash: string;
  blockNumber: string;
  timeStamp: string;
  from: string;
  to: string;
  value: string;
  blockHash: string;
  confirmation: string;
  cumulativeGasUsed: string;
  gas: string;
  gasUsed: string;
  nonce: string;
  transactionIndex: string;
  txreceipt_status: string;
}

interface Props {
  accountHistory: AccountTransaction[];
  handleClick: () => void;
}

interface ColumnProps {
  title: string;
  children: React.ReactNode;
}

const TransactionColumn = ({ title, children }: ColumnProps) => (
  <div className="flex flex-col gap-2">
    <div className="bg-gray-100 p-2 text-sm font-semibold text-gray-700 border-b">{title}</div>
    {children}
  </div>
);

export default function Transaction({ accountHistory, handleClick }: Props) {
  return (
    <section className="overflow-x-auto">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 xl:grid-cols-7 gap-4 p-4 text-xs text-gray-800">
        <TransactionColumn title="Tx Hash">
          {accountHistory.map((account, index) => (
            <p key={index} className="truncate">{account.hash.slice(0, 10)}...</p>
          ))}
        </TransactionColumn>

        <TransactionColumn title="Method">
          {accountHistory.map((_, index) => (
            <div key={index} className="flex items-center gap-1">
              <Eye className="w-4 h-4 text-blue-500" />
              <span>Transfer</span>
            </div>
          ))}
        </TransactionColumn>

        <TransactionColumn title="Block">
          {accountHistory.map((account, index) => (
            <Link
              key={index}
              href={{ pathname: "/ethers/block", query: account.blockNumber }}
              passHref
            >
              <a className="text-blue-600 hover:underline" onClick={handleClick}>
                {account.blockNumber}
              </a>
            </Link>
          ))}
        </TransactionColumn>

        <TransactionColumn title="Timestamp">
          {accountHistory.map((account, index) => (
            <p key={index}>{account.timeStamp}</p>
          ))}
        </TransactionColumn>

        <TransactionColumn title="From">
          {accountHistory.map((account, index) => (
            <p key={index} className="truncate">{account.from.slice(0, 10)}...</p>
          ))}
        </TransactionColumn>

        <TransactionColumn title="To">
          {accountHistory.map((account, index) => (
            <Link
              key={index}
              href={{ pathname: "/ethers/account", query: account.to }}
              passHref
            >
              <a className="text-blue-600 hover:underline" onClick={handleClick}>
                {account.to.slice(0, 10)}...
              </a>
            </Link>
          ))}
        </TransactionColumn>

        <TransactionColumn title="Value">
          {accountHistory.map((account, index) => (
            <p key={index}>{account.value.slice(0, 5)}...</p>
          ))}
        </TransactionColumn>

        <TransactionColumn title="BlockHash">
          {accountHistory.map((account, index) => (
            <p key={index} className="truncate">{account.blockHash.slice(0, 10)}...</p>
          ))}
        </TransactionColumn>

        <TransactionColumn title="Confirmation">
          {accountHistory.map((account, index) => (
            <p key={index}>{account.confirmation}</p>
          ))}
        </TransactionColumn>

        <TransactionColumn title="Cumulative Gas">
          {accountHistory.map((account, index) => (
            <p key={index}>{account.cumulativeGasUsed}</p>
          ))}
        </TransactionColumn>

        <TransactionColumn title="Gas">
          {accountHistory.map((account, index) => (
            <p key={index}>{account.gas}</p>
          ))}
        </TransactionColumn>

        <TransactionColumn title="Gas Used">
          {accountHistory.map((account, index) => (
            <p key={index}>{account.gasUsed}</p>
          ))}
        </TransactionColumn>

        <TransactionColumn title="Nonce">
          {accountHistory.map((account, index) => (
            <p key={index}>{account.nonce}</p>
          ))}
        </TransactionColumn>

        <TransactionColumn title="Index">
          {accountHistory.map((account, index) => (
            <p key={index}>{account.transactionIndex}</p>
          ))}
        </TransactionColumn>

        <TransactionColumn title="Status">
          {accountHistory.map((account, index) => (
            <p key={index}>{account.txreceipt_status}</p>
          ))}
        </TransactionColumn>
      </div>
    </section>
  );
}
