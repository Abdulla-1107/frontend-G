import axios from 'axios';
import type { Product, OrderPayload } from '@/types';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'https://api.gulchekhra.uz',
});

export const ProductService = {
  getAll: () => api.get<Product[]>('/product').then(r => r.data),
  getById: (id: string) => api.get<Product>(`/product/${id}`).then(r => r.data),
};

export const OrderService = {
  create: (data: OrderPayload) => api.post('/order', data).then(r => r.data),
};
