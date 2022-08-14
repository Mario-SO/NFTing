import { useState } from "react";

import Web3Modal from "web3modal";

export function ConnectButton() {
    let [walletAddress, setWalletAddress] = useState(null);
    let [chainId, setChainId] = useState(0);
    let [buttonText, setButtonText] = useState("Connect to Metamask");

    let web3Modal = new Web3Modal({
        cacheProvider: true,
        theme: 'dark'
    });


    const connectWallet = async () => {
        try {
            await web3Modal.connect();
        } catch (error) {
            console.log(error);
        }
        // Check if MetaMask is installed on user's browser
        if (window.ethereum) {
            let accounts = await window.ethereum.request({ method: 'eth_accounts' });
            setWalletAddress(accounts[0]);
            chainId = await window.ethereum.request({ method: 'eth_chainId' });
            // Check if user is connected to Mainnet
            if (chainId != '0x4') {
                alert("Please connect to Rinkeby Testnet");
            } else {
                setChainId(chainId);
            }
        } else {
            alert("Please install Metamask");
        }
    }

    buttonText = walletAddress ? walletAddress : "Connect to Metamask";

    return (
        <button className="btn btn-primary gap-2 hover:btn-success" onClick={connectWallet} >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            {buttonText}
        </button>
    )
}
