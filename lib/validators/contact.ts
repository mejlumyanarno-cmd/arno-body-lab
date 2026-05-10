import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Enter a valid email"),
  goal: z.string().min(2, "Goal is required"),
  message: z.string().min(12, "Share a little more detail")
});

export type ContactInput = z.infer<typeof contactSchema>;
