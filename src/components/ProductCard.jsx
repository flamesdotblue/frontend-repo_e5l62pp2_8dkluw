import { Star } from 'lucide-react';

export default function ProductCard({ product }) {
  return (
    <a href="#" className="group block">
      <div className="aspect-[4/5] rounded-2xl bg-neutral-200 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
      </div>
      <div className="flex items-start justify-between gap-4 mt-3">
        <div>
          <h3 className="font-medium tracking-tight leading-snug">{product.name}</h3>
          <p className="text-sm text-neutral-500">{product.color}</p>
        </div>
        <div className="text-right">
          <div className="font-medium">${product.price}</div>
          <div className="flex items-center justify-end gap-1 text-xs text-neutral-500">
            <Star className="h-3.5 w-3.5 fill-yellow-400 stroke-yellow-500" />
            <span>{product.rating}</span>
          </div>
        </div>
      </div>
    </a>
  );
}
