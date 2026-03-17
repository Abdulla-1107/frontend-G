import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, Hand, Crown, Truck, Star } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useProducts } from '@/hooks/useProducts';
import ProductCard from '@/components/product/ProductCard';
import ProductSkeleton from '@/components/product/ProductSkeleton';
import heroBg from '@/assets/hero-bg.jpg';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
};

const Home = () => {
  const { t } = useLanguage();
  const { products, loading } = useProducts();
  const featured = products.slice(0, 3);

  const benefits = [
    { icon: Hand, title: t('benefit1Title'), desc: t('benefit1Desc') },
    { icon: Sparkles, title: t('benefit2Title'), desc: t('benefit2Desc') },
    { icon: Crown, title: t('benefit3Title'), desc: t('benefit3Desc') },
    { icon: Truck, title: t('benefit4Title'), desc: t('benefit4Desc') },
  ];

  const testimonials = [
    { name: 'Malika T.', text: 'Ajoyib sifat! Ko\'ylak juda chiroyli va qulay.', rating: 5 },
    { name: 'Sardor K.', text: 'Oilam uchun mukammal sovg\'a topildim. Rahmat!', rating: 5 },
    { name: 'Anna M.', text: 'Beautiful craftsmanship, truly unique pieces.', rating: 5 },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-[85vh] items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />
          <div className="grain-overlay absolute inset-0" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <motion.div className="max-w-2xl" {...fadeUp}>
            <h1 className="font-serif text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              {t('heroTitle')}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
              {t('heroSubtitle')}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/products"
                className="rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:brightness-110 hover:shadow-elevated"
              >
                {t('heroShop')}
              </Link>
              <Link
                to="/about"
                className="rounded-xl border border-border bg-background/50 px-8 py-3.5 text-sm font-semibold text-foreground backdrop-blur-sm transition-all hover:bg-secondary"
              >
                {t('heroAbout')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-y border-border bg-card py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center font-serif text-3xl font-bold"
          >
            {t('benefitsTitle')}
          </motion.h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <b.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-serif text-lg font-semibold">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <h2 className="font-serif text-3xl font-bold">{t('featured')}</h2>
              <div className="mt-2 h-px w-16 bg-primary" />
            </div>
            <Link to="/products" className="text-sm font-medium text-primary hover:underline">
              {t('allProducts')} →
            </Link>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {loading
              ? Array.from({ length: 3 }).map((_, i) => <ProductSkeleton key={i} />)
              : featured.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)
            }
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-y border-border bg-card py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-serif text-3xl font-bold">{t('testimonialsTitle')}</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {testimonials.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="rounded-2xl border border-border bg-background p-6 shadow-soft"
              >
                <div className="mb-3 flex gap-0.5">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm italic text-muted-foreground">"{review.text}"</p>
                <p className="mt-4 text-sm font-semibold text-foreground">{review.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl font-bold sm:text-4xl">{t('ctaTitle')}</h2>
            <p className="mt-4 text-lg text-muted-foreground">{t('ctaDesc')}</p>
            <Link
              to="/products"
              className="mt-8 inline-block rounded-xl bg-primary px-10 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:brightness-110 hover:shadow-elevated"
            >
              {t('ctaButton')}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
