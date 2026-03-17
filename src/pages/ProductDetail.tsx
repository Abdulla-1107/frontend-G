import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Minus, Plus, ShoppingBag, ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import { useProduct, useProducts } from '@/hooks/useProducts';
import { useLanguage } from '@/context/LanguageContext';
import { useCart } from '@/context/CartContext';
import { formatPrice, getLocalizedField } from '@/utils/helpers';
import ProductCard from '@/components/product/ProductCard';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { product, loading, error } = useProduct(id || '');
  const { products } = useProducts();
  const { lang, t } = useLanguage();
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);

  if (loading) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="aspect-square animate-pulse rounded-2xl bg-muted" />
          <div className="space-y-4">
            <div className="h-8 w-3/4 rounded bg-muted" />
            <div className="h-6 w-1/4 rounded bg-muted" />
            <div className="h-24 w-full rounded bg-muted" />
          </div>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <p className="text-lg text-destructive">{t('errorLoading')}</p>
      </div>
    );
  }

  const name = getLocalizedField(product, 'name', lang);
  const desc = getLocalizedField(product, 'description', lang);
  const related = products.filter(p => p.id !== product.id).slice(0, 3);

  return (
    <div className="py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Link to="/products" className="mb-8 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> {t('allProducts')}
        </Link>

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="overflow-hidden rounded-2xl shadow-soft">
              <img
                src={product.image}
                alt={name}
                className="h-full w-full object-cover"
                style={{ outline: '1px solid rgba(0,0,0,0.05)', outlineOffset: '-1px' }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-center"
          >
            <h1 className="font-serif text-3xl font-bold lg:text-4xl">{name}</h1>
            <p className="mt-4 text-2xl font-bold text-primary">{formatPrice(product.price)}</p>
            <p className="mt-6 leading-relaxed text-muted-foreground">{desc}</p>

            <div className="mt-8 flex items-center gap-4">
              <span className="text-sm font-medium">{t('quantity')}:</span>
              <div className="flex items-center gap-3 rounded-lg border border-border px-2">
                <button onClick={() => setQty(q => Math.max(1, q - 1))} className="p-2 text-muted-foreground hover:text-foreground">
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-8 text-center font-medium">{qty}</span>
                <button onClick={() => setQty(q => q + 1)} className="p-2 text-muted-foreground hover:text-foreground">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <button
              onClick={() => addToCart(product, qty)}
              className="mt-8 flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:brightness-110 hover:shadow-elevated"
            >
              <ShoppingBag className="h-4 w-4" />
              {t('addToCart')}
            </button>
          </motion.div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-20">
            <h2 className="font-serif text-2xl font-bold">{t('relatedProducts')}</h2>
            <div className="mt-2 h-px w-16 bg-primary" />
            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
