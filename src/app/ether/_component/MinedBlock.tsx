import React from "react";
import { TransactionColumn } from "./AccountHistory";
import Link from "next/link";

export interface TMinedBlockItem {
  blockNumber: string;
  blockReward: string;
  timestamp: string;
}

interface MinedBlockProps {
  blockMineByAddress: TMinedBlockItem[];
}

export default function MinedBlock({ blockMineByAddress }: MinedBlockProps) {
  return (
    <section>
      {blockMineByAddress.length === 0 ? (
        <div>There is no data</div>
      ) : (
        <div>
          <TransactionColumn title="Block Number">
            {blockMineByAddress.map((block, index) => (
              <Link
                key={index}
                href={{ pathname: "/ethers/block", query: { block: block.blockNumber } }}
                className="text-blue-600 hover:underline"
              >
                {block.blockNumber}
              </Link>
            ))}
          </TransactionColumn>

          <TransactionColumn title="Block Reward">
            {blockMineByAddress.map((block, index) => (
              <p key={index} className="truncate">
                {block.blockReward.slice(0, 10)}...
              </p>
            ))}
          </TransactionColumn>

          <TransactionColumn title="Timestamp">
            {blockMineByAddress.map((block, index) => (
              <p key={index} className="truncate">
                {block.timestamp}...
              </p>
            ))}
          </TransactionColumn>
        </div>
      )}
    </section>
  );
}
