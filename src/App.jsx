import Navbar from "./commpoents/Navbar";
import Hero from "./commpoents/Hero";
import Experience from "./commpoents/Experience";
import Advantage from "./commpoents/Advantage";
import Works from "./commpoents/Works";
import ClickSpark from './specialeffects/ClickSpark';

function App() {
  return (
    <ClickSpark
      sparkColor="#bfff2f"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <Navbar />
      <Hero />
      <Experience />
      <Advantage />
      <Works />
      <section id="contact" className="w-full min-h-screen bg-[#08080a]"></section>
    </ClickSpark>
  );
}

export default App;