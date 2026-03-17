import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';
import { formatPrice, getLocalizedField } from '@/utils/helpers';
import { useState } from 'react';
import CheckoutForm from './CheckoutForm';

const CartDrawer = () => {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();
  const { t, lang } = useLanguage();
  const [showCheckout, setShowCheckout] = useState(false);

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => { setIsCartOpen(false); setShowCheckout(false); }}
            className="fixed inset-0 z-50 bg-foreground/20 backdrop-blur-sm"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-background shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border px-6 py-4">
              <h2 className="font-serif text-xl font-semibold">{showCheckout ? t('orderTitle') : t('cart')} ({totalItems})</h2>
              <button onClick={() => { setIsCartOpen(false); setShowCheckout(false); }} className="rounded-md p-1 text-muted-foreground hover:text-foreground">
                <X className="h-5 w-5" />
              </button>
            </div>

            {showCheckout ? (
              <CheckoutForm onBack={() => setShowCheckout(false)} />
            ) : (
              <>
                {/* Items */}
                <div className="flex-1 overflow-y-auto px-6 py-4">
                  {cart.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-16 text-center">
                      <ShoppingBag className="mb-4 h-12 w-12 text-muted-foreground/40" />
                      <p className="font-serif text-lg text-muted-foreground">{t('cartEmpty')}</p>
                      <p className="mt-1 text-sm text-muted-foreground/70">{t('cartEmptyDesc')}</p>
                      <button
                        onClick={() => setIsCartOpen(false)}
                        className="mt-6 rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:brightness-110"
                      >
                        {t('continueShopping')}
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {cart.map(item => (
                        <div key={item.id} className="flex gap-4 rounded-xl border border-border p-3">
                          <img src={item.image} alt={getLocalizedField(item, 'name', lang)} className="h-20 w-20 rounded-lg object-cover" />
                          <div className="flex flex-1 flex-col justify-between">
                            <div>
                              <h4 className="text-sm font-medium text-foreground line-clamp-1">
                                {getLocalizedField(item, 'name', lang)}
                              </h4>
                              <p className="text-sm font-semibold text-primary">{formatPrice(item.price)}</p>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <button
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  className="flex h-7 w-7 items-center justify-center rounded-md border border-border text-muted-foreground hover:bg-secondary"
                                >
                                  <Minus className="h-3 w-3" />
                                </button>
                                <span className="w-6 text-center text-sm">{item.quantity}</span>
                                <button
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  className="flex h-7 w-7 items-center justify-center rounded-md border border-border text-muted-foreground hover:bg-secondary"
                                >
                                  <Plus className="h-3 w-3" />
                                </button>
                              </div>
                              <button
                                onClick={() => removeFromCart(item.id)}
                                className="text-xs text-destructive hover:underline"
                              >
                                {t('remove')}
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer */}
                {cart.length > 0 && (
                  <div className="border-t border-border px-6 py-4">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="font-serif text-lg font-semibold">{t('cartTotal')}</span>
                      <span className="text-lg font-bold text-primary">{formatPrice(totalPrice)}</span>
                    </div>
                    <button
                      onClick={() => setShowCheckout(true)}
                      className="w-full rounded-xl bg-primary py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
                    >
                      {t('checkout')}
                    </button>
                  </div>
                )}
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
