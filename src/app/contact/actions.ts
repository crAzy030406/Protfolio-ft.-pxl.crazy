
"use server";

import { z } from "zod";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { initializeFirebase } from "@/firebase/client";

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

  try {
    const { app } = initializeFirebase();
    const firestore = getFirestore(app);

    const { name, email, phone, requirements } = validatedFields.data;
    
    await addDoc(collection(firestore, "contacts"), {
      name,
      email,
      phone: phone || null,
      requirements,
      submittedAt: serverTimestamp(),
    });

    return {
      success: true,
      message: "Thank you for your message! I'll get back to you soon.",
    };
  } catch (error) {
    console.error("Error writing to Firestore: ", error);
    // In a real app, you'd want to handle this more gracefully
    let errorMessage = "An internal error occurred. Please try again later.";
    if (error instanceof Error) {
        errorMessage = error.message;
    }
    return {
      success: false,
      message: errorMessage,
    };
  }
}
