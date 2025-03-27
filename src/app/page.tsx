import { ethers } from "ethers";
export default function Home() {
  //? const provider = new ethers.providers.Web3Provider(window.ethereum)
  // const provider = new ethers.EtherscanProvider()
  // const providers = new ethers.AlchemyProvider()
  //const providerOne = new ethers.InfuraProvider()
  //const providerTwo = new ethers.JsonRpcProvider()
  // const provider = new ethers.JsonRpcProvider("https://mainnet.infura.io/v3/f34253e45993414b98f23ce3119fdc3e");
  // const provider = new ethers.InfuraProvider("https://mainnet.infura.io/v3/f34253e45993414b98f23ce3119fdc3e");
  
  // const address = '0x00F8965CB51DB64276230F43602589941B9c8C5F';
  // async function getBalance(){
    //   const balance = await provider.getBalance(address,'address')
    //   console.log(balance)
    
  // }
  // const provider = new ethers.JsonRpcProvider("https://mainnet.infura.io/v3/YOUR_INFURA_API_KEY");
  
  const address = "0x00F8965CB51DB64276230F43602589941B9c8C5F";
  
  async function getBalance() {
    try {
      const provider = ethers.providers.getDefaultProvider();
      // const provider = new ethers.providers.EtherscanProvider()
      console.log(provider,'provider')
      const balance = await provider.getBalance(address);
      console.log(ethers.utils.formatEther(balance), "ETH");
    } catch (error) {
      console.error("Error fetching balance:", error);
    }
  }

  getBalance()
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Work with Ethers</h1>
    </div>
  );
}
