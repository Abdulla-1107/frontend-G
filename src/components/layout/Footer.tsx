import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="font-serif text-xl font-bold text-foreground">Gulchehra</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t('footerDesc')}</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-sans text-sm font-semibold uppercase tracking-wider text-foreground">{t('quickLinks')}</h4>
            <ul className="mt-4 space-y-2">
              {[
                { to: '/', label: t('home') },
                { to: '/about', label: t('about') },
                { to: '/products', label: t('products') },
                { to: '/contact', label: t('contact') },
              ].map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-sm font-semibold uppercase tracking-wider text-foreground">{t('contactUs')}</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>{t('contactAddress')}</li>
              <li>+998 90 123 45 67</li>
              <li>info@gulchekhra.uz</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-sans text-sm font-semibold uppercase tracking-wider text-foreground">Social</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="transition-colors hover:text-primary">Instagram</a></li>
              <li><a href="#" className="transition-colors hover:text-primary">Telegram</a></li>
              <li><a href="#" className="transition-colors hover:text-primary">Facebook</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Gulchehra. {t('rights')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
