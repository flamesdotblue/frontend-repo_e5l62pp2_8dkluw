import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-0">
        <div className="pointer-events-none absolute -top-24 right-1/4 h-72 w-72 rounded-full bg-gradient-to-b from-neutral-200 to-transparent blur-2xl opacity-70" />
        <div className="pointer-events-none absolute -bottom-24 -left-10 h-96 w-96 rounded-full bg-gradient-to-tr from-neutral-200 to-transparent blur-3xl opacity-70" />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 pt-16 md:pt-24">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <p className="uppercase tracking-[0.2em] text-xs text-neutral-500">New Season</p>
            <h1 className="mt-3 text-4xl md:text-6xl font-semibold leading-[1.05] tracking-tight">
              Minimal form. Maximum comfort.
            </h1>
            <p className="mt-5 text-neutral-600 max-w-md">
              Premium everyday sneakers engineered with buttery leather, breathable lining, and cloud-cushion soles.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <a href="#products" className="inline-flex items-center gap-2 rounded-full bg-black text-white px-5 py-3 text-sm font-medium hover:bg-neutral-900 transition-colors">
                Shop new arrivals
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#" className="inline-flex items-center rounded-full border border-neutral-300 px-5 py-3 text-sm font-medium hover:border-neutral-400 transition-colors">
                Explore lookbook
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl bg-neutral-200 overflow-hidden shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1600&auto=format&fit=crop"
                alt="Minimal white sneaker on a neutral pedestal"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
