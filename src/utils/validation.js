import { z } from 'zod';

export const productValidation = z.object({
  name: z.string().min(1, 'Name is required'),
  description: z.string().min(1, 'Description is required'),
  price: z.number().positive('Price must be a positive number'),
  quantity: z.number().int().nonnegative('Quantity must be a non-negative integer'),
});
