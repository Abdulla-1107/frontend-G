export interface Product {
  id: string;
  name_uz: string;
  name_en: string;
  name_ru: string;
  description_uz: string;
  description_en: string;
  description_ru: string;
  price: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface OrderPayload {
  fullName: string;
  phone: string;
  address: string;
  email: string;
  oferta: boolean;
  totalPrice: number;
  items: { productId: string; quantity: number }[];
}

export type Language = 'uz' | 'en' | 'ru';
