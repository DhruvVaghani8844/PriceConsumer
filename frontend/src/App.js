import React, {  useState } from 'react';
import { ethers } from "ethers";
import abi from "./componets/PriceConsumerV3.json"
function App() {
  
  const [balance,setBalance] = useState(null);
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const signer = provider.getSigner()
  const contractAddress = '0x53145c61dB143082150f759c5815852b0d191Ce1';
  const contractABI = abi.abi;
 
  const contract = new ethers.Contract(contractAddress, contractABI, signer);


  const buyChai = async (event) => {
    event.preventDefault();
    const amount = { value: ethers.utils.parseEther("1") };
    const transaction = await contract.updatePrice(amount);
    await transaction.wait();
    console.log("Transaction is done");
  };



  
  //display balance
  const loadBalance = async()=>{
    // event.preventDefault(); 
    const balance = await provider.getBalance(contract.address); 
    setBalance(ethers.utils.formatEther(balance))
  }
   loadBalance()

  return (
    <div className="container">
      <div className="row mt-5">

        <div className="col">
          <h3>Stored Price</h3>
          <p>Stored ETH/USD Price: {balance}</p>
        </div>

        <div className="col">
          <h3>Update Price</h3>
          <button type="submit" className="btn btn-dark" onClick={buyChai}>Update</button>
        </div>
      </div>
    </div>
  );
}

export default App;