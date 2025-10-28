import { useState } from 'react';
import { ShoppingBag, Menu } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 h-16 flex items-center justify-between">
        <a href="#" className="font-semibold tracking-tight text-lg">Élan</a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-700">
          <a className="hover:text-black transition-colors" href="#products">Shop</a>
          <a className="hover:text-black transition-colors" href="#">Collections</a>
          <a className="hover:text-black transition-colors" href="#">Stories</a>
          <a className="hover:text-black transition-colors" href="#">Support</a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-3 py-1.5 text-sm font-medium hover:border-neutral-400 transition-colors">
            <ShoppingBag className="h-4 w-4" />
            Cart
          </button>
          <button className="md:hidden p-2 rounded-md hover:bg-neutral-100" onClick={() => setOpen(!open)}>
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-neutral-200 px-6 py-4 space-y-3 bg-white">
          <a className="block text-neutral-700" href="#products" onClick={() => setOpen(false)}>Shop</a>
          <a className="block text-neutral-700" href="#" onClick={() => setOpen(false)}>Collections</a>
          <a className="block text-neutral-700" href="#" onClick={() => setOpen(false)}>Stories</a>
          <a className="block text-neutral-700" href="#" onClick={() => setOpen(false)}>Support</a>
        </div>
      )}
    </header>
  );
}
