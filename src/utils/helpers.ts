import { Product, Language } from '@/types';

export const formatPrice = (price: string | number): string => {
  const num = typeof price === 'string' ? parseFloat(price) : price;
  return new Intl.NumberFormat('uz-UZ', {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(num) + ' so\'m';
};

export const getLocalizedField = (
  product: Product,
  field: 'name' | 'description',
  lang: Language
): string => {
  const key = `${field}_${lang}` as keyof Product;
  return (product[key] as string) || (product[`${field}_uz` as keyof Product] as string) || '';
};
