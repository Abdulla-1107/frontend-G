import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useProducts } from '@/hooks/useProducts';
import { getLocalizedField } from '@/utils/helpers';
import ProductCard from '@/components/product/ProductCard';
import ProductSkeleton from '@/components/product/ProductSkeleton';

type SortMode = 'default' | 'low-high' | 'high-low';

const Products = () => {
  const { t, lang } = useLanguage();
  const { products, loading, error } = useProducts();
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState<SortMode>('default');

  const filtered = useMemo(() => {
    let result = products.filter(p => {
      const name = getLocalizedField(p, 'name', lang).toLowerCase();
      const desc = getLocalizedField(p, 'description', lang).toLowerCase();
      const q = search.toLowerCase();
      return name.includes(q) || desc.includes(q);
    });

    if (sort === 'low-high') result = [...result].sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    if (sort === 'high-low') result = [...result].sort((a, b) => parseFloat(b.price) - parseFloat(a.price));

    return result;
  }, [products, search, sort, lang]);

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h1 className="font-serif text-4xl font-bold">{t('allProducts')}</h1>
          <div className="mt-2 h-px w-20 bg-primary" />
        </motion.div>

        {/* Filters */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative max-w-sm flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder={t('searchProducts')}
              className="w-full rounded-lg border border-border bg-background py-2.5 pl-10 pr-4 text-sm outline-none transition-colors focus:border-primary"
            />
          </div>
          <select
            value={sort}
            onChange={e => setSort(e.target.value as SortMode)}
            className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary"
          >
            <option value="default">{t('sortDefault')}</option>
            <option value="low-high">{t('sortLowHigh')}</option>
            <option value="high-low">{t('sortHighLow')}</option>
          </select>
        </div>

        {/* Content */}
        <div className="mt-10">
          {loading ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => <ProductSkeleton key={i} />)}
            </div>
          ) : error ? (
            <div className="py-20 text-center">
              <p className="text-lg text-destructive">{t('errorLoading')}</p>
            </div>
          ) : filtered.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-lg text-muted-foreground">{t('noProducts')}</p>
            </div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Products;
