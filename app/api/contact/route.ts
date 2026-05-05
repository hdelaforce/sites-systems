import { NextRequest, NextResponse } from 'next/server'
import { contactSchema } from '@/lib/schemas'
import { Resend } from 'resend'

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null

export async function POST(req: NextRequest) {
  const body = await req.json()
  const parsed = contactSchema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json(
      { errors: parsed.error.flatten().fieldErrors },
      { status: 422 }
    )
  }

  const { name, email, message } = parsed.data
  const to = process.env.CONTACT_TO_EMAIL ?? 'hello@sites.systems'

  if (resend) {
    await resend.emails.send({
      from: 'Sites Systems <noreply@sites.systems>',
      to,
      subject: `New enquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    })
  } else {
    console.log('[contact]', { name, email, message })
  }

  return NextResponse.json({ ok: true })
}
