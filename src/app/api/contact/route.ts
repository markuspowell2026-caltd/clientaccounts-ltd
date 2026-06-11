import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  try {
    const { name, email, phone, business, services, message } = await request.json()

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const rows = [
      { label: 'Name',     value: name },
      { label: 'Email',    value: `<a href="mailto:${email}" style="color:#0D1B3E">${email}</a>` },
      phone    && { label: 'Phone',    value: phone },
      business && { label: 'Business', value: `<strong>${business}</strong>` },
      services && { label: 'Services', value: services },
    ]
      .filter(Boolean)
      .map(
        (r: unknown) => {
          const row = r as { label: string; value: string }
          return `<tr>
            <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#6b7280;font-size:13px;width:130px;vertical-align:top">${row.label}</td>
            <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#111827;font-size:13px">${row.value}</td>
          </tr>`
        },
      )
      .join('')

    await resend.emails.send({
      from:    'Client Accounts Ltd <noreply@clientaccounts.ltd>',
      to:      ['info@clientaccounts.ltd'],
      replyTo: email,
      subject: `New enquiry from ${name}${business ? ` — ${business}` : ''}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;background:#f9fafb">
          <div style="background:#0D1B3E;padding:28px 28px 20px;border-radius:10px 10px 0 0">
            <p style="color:#C4A44A;font-size:11px;font-weight:600;letter-spacing:2px;text-transform:uppercase;margin:0 0 6px">Client Accounts Ltd</p>
            <h1 style="color:#ffffff;margin:0;font-size:22px;font-weight:700">New Website Enquiry</h1>
          </div>
          <div style="background:#ffffff;padding:28px;border-radius:0 0 10px 10px;border:1px solid #e5e7eb;border-top:none">
            <table style="width:100%;border-collapse:collapse">${rows}</table>
            <div style="margin-top:24px">
              <p style="color:#6b7280;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:1px;margin:0 0 8px">Message</p>
              <div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;padding:18px;font-size:13px;color:#374151;line-height:1.7">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
            <div style="margin-top:24px;padding:14px 16px;background:#f0f3fb;border-radius:8px;border-left:4px solid #C4A44A">
              <p style="margin:0;font-size:12px;color:#6b7280;line-height:1.6">
                Hit <strong>Reply</strong> to respond directly to ${name} at <strong>${email}</strong>.
              </p>
            </div>
          </div>
          <p style="text-align:center;color:#9ca3af;font-size:11px;margin-top:16px">
            clientaccounts.ltd · 417 Carlton Hill, Nottingham NG4 1HW · Co. No. 17268964
          </p>
        </div>
      `,
    })

    // Auto-reply to the enquirer
    await resend.emails.send({
      from:    'Client Accounts Ltd <noreply@clientaccounts.ltd>',
      to:      [email],
      subject: `We've received your enquiry — Client Accounts Ltd`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;background:#f9fafb">
          <div style="background:#0D1B3E;padding:28px 28px 20px;border-radius:10px 10px 0 0">
            <p style="color:#C4A44A;font-size:11px;font-weight:600;letter-spacing:2px;text-transform:uppercase;margin:0 0 6px">Client Accounts Ltd</p>
            <h1 style="color:#ffffff;margin:0;font-size:20px;font-weight:700">Thanks for getting in touch, ${name.split(' ')[0]}.</h1>
          </div>
          <div style="background:#ffffff;padding:28px;border-radius:0 0 10px 10px;border:1px solid #e5e7eb;border-top:none">
            <p style="color:#374151;font-size:14px;line-height:1.7;margin:0 0 16px">
              We've received your message and a member of our team will be in touch within <strong>one business day</strong>.
            </p>
            <p style="color:#374151;font-size:14px;line-height:1.7;margin:0 0 24px">
              If you need to reach us sooner, reply to this email or call us on <strong>+44 7828 754104</strong>.
            </p>
            <div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;padding:16px;font-size:12px;color:#6b7280;line-height:1.7">
              <strong style="color:#374151">Your enquiry summary</strong><br>
              ${services ? `Services interested in: ${services}<br>` : ''}
              ${business ? `Business: ${business}<br>` : ''}
              Submitted: ${new Date().toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
            <div style="margin-top:28px;padding-top:20px;border-top:1px solid #f3f4f6;font-size:12px;color:#9ca3af">
              <strong style="color:#0D1B3E">Client Accounts Ltd</strong><br>
              417 Carlton Hill, Nottingham, NG4 1HW, United Kingdom<br>
              info@clientaccounts.ltd · +44 7828 754104<br>
              Registered in England &amp; Wales · Co. No. 17268964
            </div>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[contact] email error:', error)
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }
}
