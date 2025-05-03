"use client"
// import axios from "axios";
import { ethers } from "ethers";
import { createContext, useContext, useEffect, useState } from "react";


// export
 

interface EtherContextType {
  home: string;
  transaction: string[] | undefined;
  blockTransactions: ethers.Block[]; 
  currentBlock: number;
  topTenBlocks: number[];
  gasPrice: string;
  provider:ethers.EtherscanProvider
}

export const EtherContext = createContext<EtherContextType | null>(null);

export function EtherProvider({ children }: { children: React.ReactNode }) {
  const [transaction, setTransaction] = useState<string[] | undefined>();
  const [blockTransactions, setBlockTransactions] = useState<ethers.Block[]>([]);
  const [currentBlock, setCurrentBlock] = useState<number>(0);
  const [topTenBlocks, setTopTenBlocks] = useState<number[]>([]);
  const [gasPrice, setGasPrice] = useState<string>("");
  const provider = new ethers.EtherscanProvider(
    "mainnet",
    "ZTYSCFJ8CDHYNMKZM2MJNUB6ABE3M1E38P"
  );
  
  async function accountDetails() {
    try {
      const getCurrentBlock = await provider.getBlockNumber();
      setCurrentBlock(getCurrentBlock);

      const block = await provider.getBlock(getCurrentBlock);
      if (block) {
        setTransaction([...block.transactions]);
      }
      

      const prevBlock = getCurrentBlock - 10;
      //? ten block
      const listTenBlocks: number[] = [];

      for (let i = getCurrentBlock; i > prevBlock; i--) {
        listTenBlocks.push(i);
        // listTenBlocks.push([i]);
      }
      setTopTenBlocks(listTenBlocks);
        //?
        // const getBlockDetails= listTenBlocks.flat()
        // getBlockDetails.map((block)=>{
        //   const singleBlock = provider.getBlock(block)
        //   tenBlockDetails.push([singleBlock])
        // })
      const blockDetails: ethers.Block[] = [];

      for (const blockNumber of listTenBlocks) {
        const singleBlock = await provider.getBlock(blockNumber);
        if (singleBlock) blockDetails.push(singleBlock);
      }

      setBlockTransactions(blockDetails);

      const gas = await (await provider.getFeeData()).gasPrice
      // const gas = await provider.getGasPrice()
      setGasPrice(ethers.formatUnits(gas!, "gwei"));
    } catch (error) {
      console.error("Error fetching account details:", error);
    }
  }

  useEffect(() => {
    accountDetails();
  }, []);

  const home = "home";

  return (
    <EtherContext.Provider
      value={{
        home,
        transaction,
        blockTransactions,
        currentBlock,
        topTenBlocks,
        gasPrice,
        provider
      }}
    >
      {children}
    </EtherContext.Provider>
  );
}

export function useEther() {
  const context = useContext(EtherContext);
  if (!context) throw new Error("useEther must be used within EtherProvider");
  return context;
}
