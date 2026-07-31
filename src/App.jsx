import Navbar from "./commpoents/Navbar";
import Hero from "./commpoents/Hero";
import Experience from "./commpoents/Experience";
import Advantage from "./commpoents/Advantage";
import Contact from "./commpoents/Contact";
import FadeInObserver from "./commpoents/FadeInObserver";
import OpeningLoader from "./commpoents/OpeningLoader";
import ClickSpark from './specialeffects/ClickSpark';
import Galaxy from './specialeffects/Galaxy';

function App() {
  return (
    <ClickSpark
      sparkColor="#bfff2f"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <Galaxy
        starCount={3000}
        starSize={1.5}
        starColor="#ffffff"
        galaxyRadius={800}
        rotationSpeed={0.0005}
      />
      <OpeningLoader />
      <Navbar />
      <Hero />
      <Experience />
      <Advantage />
      <Contact />
      <FadeInObserver />
    </ClickSpark>
  );
}

export default App;