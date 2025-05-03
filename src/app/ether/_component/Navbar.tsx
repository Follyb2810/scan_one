"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export const baseUrl = "https://api.etherscan.io/api";
export const ethers_api = "ZTYSCFJ8CDHYNMKZM2MJNUB6ABE3M1E38P";

export default function NavBar() {
  const [userAccount, setUserAccount] = useState<string>("");
  const [balance, setBalance] = useState<number>(0);
  const [count, setCount] = useState<number>(0);
  const [price, setPrice] = useState<any>(null);
  const [etherSupply, setEtherSupply] = useState<any>(null);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [updatePrice, setUpdatePrice] = useState<string>("");

  async function getEtherPrice() {
    try {
      const { data } = await axios.get(
        `${baseUrl}?module=stats&action=ethprice&apikey=${ethers_api}`
      );
      setPrice(data.result);

      const timeStamp = Number(data.result.ethusd_timestamp) * 1000;
      const date = new Date(timeStamp);
      setUpdatePrice(
        `Updated at ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
      );

      const supplyRes = await axios.get(
        `${baseUrl}?module=stats&action=ethsupply&apikey=${ethers_api}`
      );
      setEtherSupply(supplyRes.data.result);
    } catch (e) {
      console.log("Failed to fetch price or supply", e);
    }
  }

  async function checkAccountExist() {
    try {
      if (!window.ethereum) return console.log("Please install MetaMask");
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (accounts.length) {
        setUserAccount(accounts[0]);
      }
    } catch (error) {
      console.error("Error checking account:", error);
    }
  }

  async function connectWallet() {
    try {
      if (!window.ethereum) return console.log("Please install MetaMask");
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      if (accounts.length) {
        setUserAccount(accounts[0]);
      }
      window.location.reload();
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
  }

  function toggleUserInfo() {
    setOpenModal((prev) => !prev);
  }

  useEffect(() => {
    getEtherPrice();
    checkAccountExist();
  }, []);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md w-full p-4">
      <section className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>
          <Link href="/ether" className="hidden md:block text-xl font-bold text-blue-600">
            folly
          </Link>
          <Link href="/ether" className="block md:hidden">
            <Image src="/logo.png" alt="Logo" width={40} height={40} />
          </Link>
        </div>

        <div>
          {userAccount ? (
            <div className="relative">
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm"
                onClick={toggleUserInfo}
              >
                ACC: {userAccount.slice(0, 10)}...
              </button>

              {openModal && (
                <div className="absolute right-0 mt-2 w-72 max-w-full bg-white dark:bg-gray-800 shadow-lg rounded-md p-4 z-50">
                  <div className="flex items-center gap-2 mb-2">
                    <Image src="/logo.png" alt="User" width={30} height={30} />
                    <p className="text-sm break-words">{userAccount.slice(0,5)}...</p>
                  </div>
                  <p className="text-sm">Balance: {balance} ETH</p>
                  <p className="text-sm">Total Tx: {count}</p>
                  <p className="text-xs text-gray-500">{updatePrice}</p>
                  <button
                    className="mt-3 text-red-500 text-sm"
                    onClick={toggleUserInfo}
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={connectWallet}
              className="bg-green-600 text-white px-4 py-2 rounded-md text-sm"
            >
              Connect Wallet
            </button>
          )}
        </div>
      </section>

      <section className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md shadow-sm">
          <h2 className="font-semibold text-blue-600 mb-2">Ether Price</h2>
          <p>USD: ${price?.ethusd}</p>
          <p>BTC: {price?.ethbtc}</p>
          <p className="text-xs text-gray-500 mt-1">{updatePrice}</p>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md shadow-sm">
          <h2 className="font-semibold text-blue-600 mb-2">Total Supply</h2>
          <p>{etherSupply ? Number(etherSupply).toLocaleString() : "--"}</p>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md shadow-sm  flex gap-4 justify-between">
          <Image
            src="/logo.png"
            alt="Token Logo"
            width={50}
            height={50}
            className=""
          />
          <div className="mt-2 space-y-1">
            <p>ERC20 Token</p>
            <p>ERC721 Token</p>
            <p>ERC1155 Token</p>
            <p>ERC Contracts</p>
          </div>
        </div>
      </section>
    </header>
  );
}
