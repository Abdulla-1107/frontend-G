import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <div className="py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="font-serif text-4xl font-bold">{t('contactTitle')}</h1>
          <div className="mx-auto mt-4 h-px w-20 bg-primary" />
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">{t('contactDesc')}</p>
        </motion.div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="font-serif text-2xl font-semibold">{t('contactInfo')}</h2>
            <div className="mt-8 space-y-6">
              {[
                { icon: MapPin, text: t('contactAddress') },
                { icon: Phone, text: '+998 90 591 87 64' },
                { icon: Mail, text: 'info@gulchekhra.uz' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <span className="text-foreground">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="mt-10 aspect-video overflow-hidden rounded-2xl border border-border bg-muted">
              <div className="flex h-full items-center justify-center text-muted-foreground">
                <MapPin className="mr-2 h-5 w-5" /> {t('contactAddress')}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <form
              onSubmit={e => { e.preventDefault(); }}
              className="space-y-5 rounded-2xl border border-border bg-card p-8 shadow-soft"
            >
              <div>
                <label className="mb-1 block text-sm font-medium">{t('contactName')}</label>
                <input className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">{t('email')}</label>
                <input type="email" className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">{t('contactMessage')}</label>
                <textarea rows={5} className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
              </div>
              <button
                type="submit"
                className="w-full rounded-xl bg-primary py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
              >
                {t('contactSend')}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
