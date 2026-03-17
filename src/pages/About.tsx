import { motion } from 'framer-motion';
import { Gem, Heart, Target, Award } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true } as const,
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
});

const About = () => {
  const { t } = useLanguage();

  const sections = [
    { icon: Heart, title: t('aboutStory'), text: t('aboutStoryText') },
    { icon: Target, title: t('aboutMission'), text: t('aboutMissionText') },
    { icon: Gem, title: t('aboutCraft'), text: t('aboutCraftText') },
    { icon: Award, title: t('aboutValues'), text: t('aboutValuesText') },
  ];

  return (
    <div className="py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp()} className="text-center">
          <h1 className="font-serif text-4xl font-bold sm:text-5xl">{t('aboutTitle')}</h1>
          <div className="mx-auto mt-4 h-px w-20 bg-primary" />
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {t('aboutStoryText')}
          </p>
        </motion.div>

        <div className="mt-20 space-y-16">
          {sections.map((s, i) => (
            <motion.div key={i} {...fadeUp(i * 0.1)} className="flex gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <s.icon className="h-6 w-6" />
              </div>
              <div>
                <h2 className="font-serif text-2xl font-semibold">{s.title}</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
