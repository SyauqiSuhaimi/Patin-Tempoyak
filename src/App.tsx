
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { RamadhanPromo } from './components/RamadhanPromo';
import { About } from './components/About';
import { Menu } from './components/Menu';
import { Gallery } from './components/Gallery';
import { Reviews } from './components/Reviews';
import { Footer } from './components/Footer';
import { SeasonalBanner } from './components/SeasonalBanner';
import { SeoHead } from './components/SeoHead';

function App() {
  return (
    <div className="min-h-screen font-sans bg-secondary">
      <SeoHead />
      <div className="fixed top-0 left-0 right-0 z-50 flex flex-col">
        <SeasonalBanner />
        <Navbar />
      </div>
      <main>
        <Hero />
        <RamadhanPromo />
        <About />
        <Menu />
        <Gallery />
        <Reviews />
        <Footer />
      </main>
    </div>
  );
}

export default App;
