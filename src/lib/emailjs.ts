import emailjs from '@emailjs/browser'

export interface ContactFormPayload {
  name: string
  email: string
  message: string
  serviceInterest?: string
}

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export function isEmailJsConfigured(): boolean {
  return Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY)
}

export async function sendContactEmail(payload: ContactFormPayload): Promise<void> {
  if (!isEmailJsConfigured()) {
    throw new Error(
      'Email delivery is not configured. Add your EmailJS keys to a .env file in the project root.',
    )
  }

  const templateParams = {
    from_name: payload.name,
    from_email: payload.email,
    user_name: payload.name,
    user_email: payload.email,
    name: payload.name,
    email: payload.email,
    reply_to: payload.email,
    message: payload.message,
    service_interest: payload.serviceInterest || 'General Inquiry',
    to_email: 'whimseytech@gmail.com',
  }

  await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, { publicKey: PUBLIC_KEY })
}
