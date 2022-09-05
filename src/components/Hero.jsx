import UnpoliteABI from '../ABIS/UNPP.json'
import { Link } from 'react-router-dom'

const connectToContract = async () => {
    const ABI = UnpoliteABI
    const address = '0xe04312AB95a9E6e3F87a5aB060a0522E7a8eaEbd'
    window.contract = new window.web3.eth.Contract(ABI, address)
    await window.contract.methods.mint(1).call()
}
export function Hero() {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content pb-10 flex-col lg:flex-row">
                <div>
                    <h1 className="font-bold lg:text-8xl md:text-md sm:text-sm">UNPOLITE COLLECTIONS</h1>
                </div>
                <div className="text-8xl bg-info" id='mintPass' onClick={connectToContract}>🖕</div>
                <a href="https://unpolite-pass.vercel.app" target="_blank" rel="noopener noreferrer"><button className='btn btn-success gap-2 hover:btn-accent'>Mint Unpolite Pass</button></a>
            </div>
        </div>
    );
}