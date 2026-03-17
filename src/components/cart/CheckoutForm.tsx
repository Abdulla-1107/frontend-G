import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowLeft, Loader2, CheckCircle } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';
import { OrderService } from '@/api';
import { useToast } from '@/hooks/use-toast';

const orderSchema = z.object({
  fullName: z.string().trim().min(1, 'required').max(100),
  phone: z.string().trim().min(9, 'invalidPhone').max(20),
  address: z.string().trim().min(1, 'required').max(300),
  email: z.string().trim().email('invalidEmail').max(255),
  oferta: z.literal(true),
});

type OrderForm = z.infer<typeof orderSchema>;

interface Props {
  onBack: () => void;
}

const CheckoutForm = ({ onBack }: Props) => {
  const { cart, totalPrice, clearCart, setIsCartOpen } = useCart();
  const { t } = useLanguage();
  const { toast } = useToast();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const { register, handleSubmit, formState: { errors } } = useForm<OrderForm>({
    resolver: zodResolver(orderSchema),
    defaultValues: { oferta: false as unknown as true },
  });

  const onSubmit = async (data: OrderForm) => {
    setStatus('loading');
    try {
      await OrderService.create({
        fullName: data.fullName,
        phone: data.phone,
        address: data.address,
        email: data.email,
        oferta: true,
        totalPrice,
        items: cart.map(item => ({ productId: item.id, quantity: item.quantity })),
      });
      setStatus('success');
      toast({ title: t('orderSuccess') });
      clearCart();
      setTimeout(() => {
        setIsCartOpen(false);
        setStatus('idle');
      }, 2000);
    } catch {
      setStatus('idle');
      toast({ title: t('orderError'), variant: 'destructive' });
    }
  };

  if (status === 'success') {
    return (
      <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
        <CheckCircle className="mb-4 h-16 w-16 text-primary" />
        <h3 className="font-serif text-xl font-semibold">{t('orderSuccess')}</h3>
      </div>
    );
  }

  const fieldClass = "w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary";
  const errClass = "text-xs text-destructive mt-1";

  return (
    <div className="flex flex-1 flex-col overflow-y-auto">
      <div className="px-6 py-2">
        <button onClick={onBack} className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> {t('cart')}
        </button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-1 flex-col px-6 pb-6">
        <div className="flex-1 space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-foreground">{t('fullName')}</label>
            <input {...register('fullName')} className={fieldClass} />
            {errors.fullName && <p className={errClass}>{t(errors.fullName.message as any)}</p>}
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-foreground">{t('phone')}</label>
            <input {...register('phone')} placeholder="+998" className={fieldClass} />
            {errors.phone && <p className={errClass}>{t(errors.phone.message as any)}</p>}
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-foreground">{t('address')}</label>
            <input {...register('address')} className={fieldClass} />
            {errors.address && <p className={errClass}>{t(errors.address.message as any)}</p>}
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-foreground">{t('email')}</label>
            <input {...register('email')} type="email" className={fieldClass} />
            {errors.email && <p className={errClass}>{t(errors.email.message as any)}</p>}
          </div>
          <div className="flex items-start gap-2">
            <input {...register('oferta')} type="checkbox" id="oferta" className="mt-1 h-4 w-4 rounded border-border accent-primary" />
            <label htmlFor="oferta" className="text-sm text-muted-foreground">{t('oferta')}</label>
          </div>
          {errors.oferta && <p className={errClass}>{t('required')}</p>}
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 disabled:opacity-50"
        >
          {status === 'loading' && <Loader2 className="h-4 w-4 animate-spin" />}
          {t('placeOrder')}
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
