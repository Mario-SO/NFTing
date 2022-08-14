import { ConnectButton } from "./components/ConnectButton";
import { Hero } from "./components/Hero";
import { Tier } from "./components/Tier";


export default function App() {

  return (
    <div className="App">
      <div className="navbar">
        <ConnectButton />
      </div>

      <Hero />

      <Tier />
    </div>
  )
}
