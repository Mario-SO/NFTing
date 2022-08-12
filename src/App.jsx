import { Hero } from "./components/Hero";
import { Tier } from "./components/Tier";


export default function App() {

  return (
    <div className="App">
      <div className="navbar bg-base-100">
        <a className="btn btn-ghost normal-case text-xl">NFTing</a>
      </div>
      <Hero />
      <Tier title="FREE Tier" />
      <Tier title="Tier 1" />
      <Tier title="Tier 2" />
    </div>
  )
}
