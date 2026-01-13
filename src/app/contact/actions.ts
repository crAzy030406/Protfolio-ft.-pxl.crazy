
"use server";

import { z } from "zod";
import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';

// Initialize Firebase Admin SDK
const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY!);

if (!getApps().length) {
  initializeApp({
    credential: cert(serviceAccount),
  });
}

const firestore = getFirestore();


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
    const { name, email, phone, requirements } = validatedFields.data;
    
    await firestore.collection("contacts").add({
      name,
      email,
      phone: phone || null,
      requirements,
      submittedAt: FieldValue.serverTimestamp(),
    });

    return {
      success: true,
      message: "Thank you for your message! I'll get back to you soon.",
    };
  } catch (error) {
    console.error("Error writing to Firestore: ", error);
    return {
      success: false,
      message: "An internal error occurred. Please try again later.",
    };
  }
}
