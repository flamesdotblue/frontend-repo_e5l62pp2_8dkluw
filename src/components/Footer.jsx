import { Instagram, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 mt-12">
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div className="font-semibold tracking-tight text-lg">Élan</div>
            <p className="text-neutral-500 mt-2 max-w-sm">Thoughtfully made footwear for everyday elegance.</p>
          </div>
          <div className="flex items-center gap-4 text-neutral-600">
            <a href="#" aria-label="Instagram" className="p-2 rounded-full hover:bg-neutral-100 transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Twitter" className="p-2 rounded-full hover:bg-neutral-100 transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" aria-label="YouTube" className="p-2 rounded-full hover:bg-neutral-100 transition-colors">
              <Youtube className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div className="mt-8 text-xs text-neutral-500">
          © {new Date().getFullYear()} Élan Footwear. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
