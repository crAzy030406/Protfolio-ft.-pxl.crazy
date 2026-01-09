"use server";

import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  requirements: z.string().min(10),
});

export async function submitContactForm(values: z.infer<typeof formSchema>) {
  const validatedFields = formSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Invalid data provided. Please check the form and try again.",
    };
  }

  // TODO: The user will select a database to send details to later.
  // For now, we'll log the data to the console.
  console.log("New Contact Form Submission:", validatedFields.data);

  // Simulate a network request
  await new Promise(resolve => setTimeout(resolve, 1000));

  return {
    success: true,
    message: "Thank you for your message! I'll get back to you soon.",
  };
}
