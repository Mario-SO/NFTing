import { ConnectButton } from "./components/ConnectButton";
import { Hero } from "./components/Hero";
import { CardList } from "./components/CardList";


export default function App() {

  return (
    <div className="App">
      <div className="navbar">
        <ConnectButton />
      </div>

      <Hero />

      <CardList />
    </div>
  )
}
