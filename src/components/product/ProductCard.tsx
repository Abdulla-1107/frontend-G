import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import type { Product } from '@/types';
import { useLanguage } from '@/context/LanguageContext';
import { useCart } from '@/context/CartContext';
import { formatPrice, getLocalizedField } from '@/utils/helpers';

interface Props {
  product: Product;
  index?: number;
}

const ProductCard = ({ product, index = 0 }: Props) => {
  const { lang, t } = useLanguage();
  const { addToCart } = useCart();

  const name = getLocalizedField(product, 'name', lang);
  const desc = getLocalizedField(product, 'description', lang);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-2xl bg-card shadow-soft transition-shadow duration-300 hover:shadow-elevated">
        <Link to={`/products/${product.id}`} className="block">
          <div className="aspect-[3/4] overflow-hidden">
            <img
              src={product.image}
              alt={name}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              style={{ outline: '1px solid rgba(0,0,0,0.05)', outlineOffset: '-1px' }}
            />
          </div>
        </Link>

        {/* Quick add */}
        <motion.button
          initial={{ y: '100%' }}
          whileHover={{ scale: 1.02 }}
          className="absolute bottom-[calc(25%+1rem)] left-4 right-4 flex items-center justify-center gap-2 rounded-xl bg-primary py-3 text-sm font-medium text-primary-foreground opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
          onClick={(e) => { e.preventDefault(); addToCart(product); }}
        >
          <ShoppingBag className="h-4 w-4" />
          {t('addToCart')}
        </motion.button>

        <div className="p-4">
          <Link to={`/products/${product.id}`}>
            <h3 className="font-serif text-lg font-semibold text-card-foreground line-clamp-1">{name}</h3>
            <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{desc}</p>
          </Link>
          <p className="mt-3 text-base font-semibold text-primary">{formatPrice(product.price)}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
