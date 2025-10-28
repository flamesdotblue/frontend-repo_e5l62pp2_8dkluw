import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import ProductGrid from './components/ProductGrid.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 selection:bg-black selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <section id="products" className="px-6 md:px-10 lg:px-16 py-16 md:py-24">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-end justify-between mb-8 md:mb-12">
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Featured Drops</h2>
                <p className="text-neutral-500 mt-2">Curated silhouettes crafted for comfort and presence.</p>
              </div>
              <a href="#" className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-neutral-700 hover:text-black transition-colors">View all</a>
            </div>
            <ProductGrid />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
