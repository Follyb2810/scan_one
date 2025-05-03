'use client'

import React, { useEffect, useState } from 'react'
import { useEther } from '../_component/EtherContext'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import Table from '../_component/Table'
import axios from 'axios'
import { baseUrl, ethers_api } from '../_component/Navbar'

export default function Account() {
  const [account, setAccount] = useState('')
  const [name, setName] = useState('')
  const [balance, setBalance] = useState('')
  const [totalTransaction, setTotalTransaction] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [accountHistory, setAccountHistory] = useState([])
  const [internalAddress, setInternalAddress] = useState([])
  const [ERC20, setERC20] = useState([])
  const [ERC21, setERC21] = useState([])
  const [ERC1155, setERC1155] = useState([])
  const [blockMineByAddress, setBlockMineByAddress] = useState([])
  const [blockRangeTransaction, setBlockRangeTransaction] = useState([])

  const { provider } = useEther()
  const searchParams = useSearchParams()
  const address = searchParams?.keys().next().value
  // const accKey = searchParams?.keys().next().value
  // const address = accKey ? searchParams.get(accKey) : null
  console.log({address})
  // console.log({accKey})
  useEffect(() => {
    if (address) {
      setAccount(address)
      fetchAccountData(address)
    }
  }, [address])

  const fetchAccountData = async (address: string) => {
    setIsLoading(true)
    try {
      const ensName = await provider.lookupAddress(address)
      setName(ensName ?? '')
      const bal = await provider.getBalance(address)
      setBalance(bal.toString())
      // https://api.etherscan.io/v2/api
   
      const requests = [
        axios.get(`${baseUrl}?chainid=1&module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=${ethers_api}`),
        axios.get(`${baseUrl}?chainid=1&module=account&action=txlistinternal&address=0x2c1ba59d6f58433fb1eaee7d20b26ed83bda51a3&startblock=0&endblock=2702578&page=1&offset=10&sort=asc&apikey=${ethers_api}`),
        // axios.get(`${baseUrl}?chainid=1&module=account&action=txlistinternal&txhash=0x40eb908387324f2b575b4879cd9d7188f69c8fc9d87c901b9e2daaea4b442170&apikey=${ethers_api}`),
        axios.get(`${baseUrl}?chainid=1&module=account&action=token1155tx&contractaddress=0x76be3b62873462d2142405439777e971754e8e77&address=0x83f564d180b58ad9a02a449105568189ee7de8cb&page=1&offset=100&startblock=0&endblock=99999999&sort=asc&apikey=${ethers_api}`),
        axios.get(`${baseUrl}?chainid=1&module=account&action=getminedblock&address=${address}&blocktype=block&page=1&apikey=${ethers_api}`),
        axios.get(`${baseUrl}?chainid=1&module=account&action=txlistinternal&startblock=13481778&endblock=13481778&address=${address}&blocktype=block&page=1&offset=10&sort=asc&apikey=${ethers_api}`),
        axios.get(`${baseUrl}?chainid=1&module=account&action=tokennfttx&contractaddress=0x06012c8cf97bead5deae237070f9587f8e7a266d&address=${address}&page=1&offset=100&startblock=0&endblock=27025780&sort=asc&apikey=${ethers_api}`),
        axios.get(`${baseUrl}?chainid=1&module=account&action=tokentx&contractaddress=0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2&address=${address}&page=1&offset=100&startblock=0&endblock=27025780&sort=asc&apikey=${ethers_api}`),
        // axios.get(`${baseUrl}?chainid=1&module=account&action=token1155tx&contractaddress=0x76be3b62873462d2142405439777e971754e8e77&address=0x83f564d180b58ad9a02a449105568189ee7de8cb&page=1&offset=100&startblock=0&endblock=99999999&sort=asc&apikey=${ethers_api}`)
      ]

      const [
        txList, internalTx, erc1155, minedBlocks, blockRangeTx, erc721, erc20_1
        // , erc1155_2
      ] = await Promise.all(requests)
      
      setAccountHistory(txList.data.result || [])
      setInternalAddress(internalTx.data.result || [])
      setERC1155(erc1155.data.result || [])
      setBlockMineByAddress(minedBlocks.data.result || [])
      setBlockRangeTransaction(blockRangeTx.data.result || [])
      setERC21(erc721.data.result || [])
      setERC20(erc20_1.data.result || [])
      
      const total = await provider.getTransactionCount(address)
      setTotalTransaction(total)
      // const total = await provider.getBalance(address)

      console.log({txList:txList.data.result})
      console.log({internalTx:internalTx.data.result})
      console.log({erc1155:erc1155.data.result})
      console.log({minedBlocks:minedBlocks.data.result})
      console.log({blockRangeTx:blockRangeTx.data.result})
      console.log({erc721:erc721.data.result})
      console.log({erc20_1:erc20_1.data.result})

    } catch (error) {
      console.error('Error fetching account data:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="p-6">
      {isLoading && (
        <div className="mb-4 text-center text-blue-500 font-medium">
          Fetching account details...
        </div>
      )}
  
      <div className="flex items-center gap-4 mb-4">
        <Image src="/logo.png" alt="Logo" width={40} height={40} />
        <h1 className="text-xl font-semibold">Account Details</h1>
      </div>
  
      <div className="space-y-2">
        <p><strong>Address:</strong> {account}</p>
        <p><strong>Name:</strong> {name || 'N/A'}</p>
        <p><strong>Balance:</strong> {balance || 'Fetching...'}</p>
      </div>
  
      <div className="my-4 p-4 border rounded shadow-sm bg-white">
        <h2 className="text-lg font-medium mb-2">Overview</h2>
        <p>Welcome to Folly {name || account.slice(0, 10)}...</p>
      </div>
  
      {!isLoading ? (
        <Table
          accountHistory={accountHistory}
          totalTransaction={totalTransaction}
          internalAddress={internalAddress}
          ERC20={ERC20}
          ERC21={ERC21}
          ERC1155={ERC1155}
          blockMineByAddress={blockMineByAddress}
          blockRangeTransaction={blockRangeTransaction}
          accoundData={() => fetchAccountData(account)}
        />
      ) : (
        <div className="text-center py-10">
          <p className="text-gray-500">Loading account data...</p>
        </div>
      )}
    </section>
  )
  
}
