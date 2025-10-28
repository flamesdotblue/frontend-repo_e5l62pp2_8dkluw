import ProductCard from './ProductCard.jsx';

const products = [
  {
    id: 1,
    name: 'Atlas Low',
    color: 'Bone / Cloud',
    price: 149,
    rating: '4.8',
    image:
      'https://images.unsplash.com/photo-1520975922284-19ad901cb3a0?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Linea Runner',
    color: 'Onyx / Ash',
    price: 169,
    rating: '4.9',
    image:
      'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Muse Court',
    color: 'Ivory / Sand',
    price: 139,
    rating: '4.7',
    image:
      'https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Horizon Mid',
    color: 'Slate / Charcoal',
    price: 179,
    rating: '4.8',
    image:
      'https://images.unsplash.com/photo-1560944527-a4a429848866?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
