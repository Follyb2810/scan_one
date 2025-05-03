import { Filter } from 'lucide-react';
import React, { useState } from 'react';
import Internal, { TInternalTransaction } from './Internal';
import AccountHistory, { IAccountTransaction } from './AccountHistory';
import ERC20Token, { TERC21Token } from './ERC20Token';
import ERC721Token, { TERC721Token } from './ERC721Token';
import ERC1155Token, { TERC1155Token } from './ERC1155Token';
// import BlockMined from './BlockMined';
import BlockRange, { TBlockRangeTransaction } from './BlockRange';
import MinedBlock, { TMinedBlockItem } from './MinedBlock';

interface TableProps {
  accountHistory: IAccountTransaction[];
  totalTransaction: number;
  internalAddress: TInternalTransaction[];
  ERC20: TERC21Token[];
  ERC21: TERC721Token[];
  ERC1155: TERC1155Token[];
  blockMineByAddress: TMinedBlockItem[];
  blockRangeTransaction: TBlockRangeTransaction[];
  accoundData: () => void;
}

export default function Table({
  accountHistory,
  totalTransaction,
  internalAddress,
  ERC20,
  ERC21,
  ERC1155,
  blockMineByAddress,
  blockRangeTransaction,
  accoundData,
}: TableProps) {
  const [activeTab, setActiveTab] = useState("Transaction");

  const tab = (tabName: string) => {
    setActiveTab(tabName);
  };

  const tabButtons = [
    "Transaction",
    "Internal",
    "Trans",
    "Mined",
    "ERC20",
    "ERC721",
    "ERC1155",
  ];

  return (
    <section className="p-4 space-y-4">
      <div className="flex flex-wrap gap-2">
        {tabButtons.map((btn) => (
          <button
            key={btn}
            onClick={() => tab(btn)}
            className={`px-4 py-2 rounded border transition ${
              activeTab === btn
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-100'
            }`}
          >
            {btn}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <Filter className="text-gray-600" />
        <p className="text-gray-700 text-sm">
          Latest transaction of <span className="font-semibold">{totalTransaction}</span>
        </p>
      </div>

      {activeTab === "Transaction" && (
        <AccountHistory accountHistory={accountHistory} handleClick={accoundData} />
      )}
      {activeTab === "Internal" && (
        <Internal internalAddress={internalAddress} handleClick={accoundData} />
      )}
      {activeTab === "ERC20" && (
        <ERC20Token ERC20={ERC20}  />
      )}
      {activeTab === "ERC721" && (
        <ERC721Token ERC21={ERC21}  />
      )}
      {activeTab === "ERC1155" && (
        <ERC1155Token ERC1155={ERC1155}  />
      )}
      {activeTab === "Mined" && (
        <MinedBlock blockMineByAddress={blockMineByAddress}  />
        // <BlockMined blockMineByAddress={blockMineByAddress}  />
      )}
      {activeTab === "Trans" && (
        <BlockRange blockRangeTransaction={blockRangeTransaction} handleClick={accoundData} />
      )}
    </section>
  );
}
