import { Eye } from "lucide-react";
import Link from "next/link";
import React from "react";

export interface IAccountTransaction {
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
  gasPrice: string;
  nonce: string;
  transactionIndex: string;
  txreceipt_status: string;
  
}

interface Props {
  accountHistory: IAccountTransaction[];
  handleClick: () => void;
}

interface ColumnProps {
  title: string;
  children: React.ReactNode;
}

export const TransactionColumn = ({ title, children }: ColumnProps) => (
  <div className="flex flex-col min-w-[12rem]">
    <div className="bg-gray-100 p-2 text-sm font-semibold text-gray-700 border-b">{title}</div>
    {children}
  </div>
);



export default function AccountHistory({ accountHistory, handleClick }: Props) {
  const isEmpty = accountHistory.length === 0;

  return (
    <section className="overflow-x-auto">
      {isEmpty ? (
        <div className="p-6 text-center text-gray-500 font-medium">No transactions found.</div>
      ) : (
        <div className="flex gap-4 p-4 text-xs text-gray-800">
          <TransactionColumn title="Tx Hash">
            {accountHistory.map((account, index) => (
              <p key={index} className="truncate p-2 border-b">{account.hash.slice(0, 10)}...</p>
            ))}
          </TransactionColumn>

          <TransactionColumn title="Method">
            {accountHistory.map((_, index) => (
              <div key={index} className="flex items-center gap-1 p-2 border-b">
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
                onClick={handleClick}
                className="text-blue-600 hover:underline p-2 border-b"
              >
                {account.blockNumber}
              </Link>
            ))}
          </TransactionColumn>

          <TransactionColumn title="Timestamp">
            {accountHistory.map((account, index) => (
              <p key={index} className="p-2 border-b">{account.timeStamp}</p>
            ))}
          </TransactionColumn>

          <TransactionColumn title="From">
            {accountHistory.map((account, index) => (
              <p key={index} className="truncate p-2 border-b">{account.from.slice(0, 10)}...</p>
            ))}
          </TransactionColumn>

          <TransactionColumn title="To">
            {accountHistory.map((account, index) => (
              <Link
                key={index}
                href={{ pathname: "/ethers/account", query: account.to }}
                onClick={handleClick}
                className="text-blue-600 hover:underline p-2 border-b truncate"
              >
                {account.to.slice(0, 10)}...
              </Link>
            ))}
          </TransactionColumn>

          <TransactionColumn title="Value">
            {accountHistory.map((account, index) => (
              <p key={index} className="p-2 border-b">{account.value.slice(0, 5)}...</p>
            ))}
          </TransactionColumn>

          <TransactionColumn title="Gas Price">
            {accountHistory.map((account, index) => (
              <p key={index} className="p-2 border-b">{account.gasPrice}</p>
            ))}
          </TransactionColumn>

          <TransactionColumn title="BlockHash">
            {accountHistory.map((account, index) => (
              <p key={index} className="truncate p-2 border-b">{account.blockHash.slice(0, 10)}...</p>
            ))}
          </TransactionColumn>

          <TransactionColumn title="Confirmation">
            {accountHistory.map((account, index) => (
              <p key={index} className="p-2 border-b">{account.confirmation}</p>
            ))}
          </TransactionColumn>

          <TransactionColumn title="Cumulative Gas">
            {accountHistory.map((account, index) => (
              <p key={index} className="p-2 border-b">{account.cumulativeGasUsed}</p>
            ))}
          </TransactionColumn>

          <TransactionColumn title="Gas">
            {accountHistory.map((account, index) => (
              <p key={index} className="p-2 border-b">{account.gas}</p>
            ))}
          </TransactionColumn>

          <TransactionColumn title="Gas Used">
            {accountHistory.map((account, index) => (
              <p key={index} className="p-2 border-b">{account.gasUsed}</p>
            ))}
          </TransactionColumn>

          <TransactionColumn title="Nonce">
            {accountHistory.map((account, index) => (
              <p key={index} className="p-2 border-b">{account.nonce}</p>
            ))}
          </TransactionColumn>

          <TransactionColumn title="Index">
            {accountHistory.map((account, index) => (
              <p key={index} className="p-2 border-b">{account.transactionIndex}</p>
            ))}
          </TransactionColumn>

          <TransactionColumn title="Status">
            {accountHistory.map((account, index) => (
              <p key={index} className="p-2 border-b">{account.txreceipt_status}</p>
            ))}
          </TransactionColumn>
        </div>
      )}
    </section>
  );
}


