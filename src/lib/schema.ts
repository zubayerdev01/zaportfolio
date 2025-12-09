import { z } from "zod"
export const contactFormSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    message: z.string().min(10, { message: "Message must be at least 10 characters long" }),
})

export type ContactFormSchema = z.infer<typeof contactFormSchema>