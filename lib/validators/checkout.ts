import { z } from "zod";

export const checkoutSchema = z.object({
  programSlug: z.string().min(2).optional(),
  priceId: z.string().min(3).optional(),
  plan: z.string().min(2).optional()
});

export type CheckoutInput = z.infer<typeof checkoutSchema>;
