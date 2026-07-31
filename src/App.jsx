import { lazy, Suspense } from 'react';
import Navbar from "./commpoents/Navbar";
import Hero from "./commpoents/Hero";
import FadeInObserver from "./commpoents/FadeInObserver";
import OpeningLoader from "./commpoents/OpeningLoader";
import ClickSpark from './specialeffects/ClickSpark';
import Galaxy from './specialeffects/Galaxy';

const Experience = lazy(() => import('./commpoents/Experience'));
const Advantage = lazy(() => import('./commpoents/Advantage'));
const Contact = lazy(() => import('./commpoents/Contact'));

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
      {console.log('首屏加载优化')}      
      <Suspense fallback={null}>
        <Experience />
      </Suspense>
      <Suspense fallback={null}>
        <Advantage />
      </Suspense>
      <Suspense fallback={null}>
        <Contact />
      </Suspense>
      <FadeInObserver />
    </ClickSpark>
  );
}

export default App;