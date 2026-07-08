// src/app/api/contact/route.js
// Verifies Altcha CAPTCHA solution, then sends the inquiry via Resend

import { verifySolution } from 'altcha-lib';
import { Resend } from 'resend';

const HMAC_SECRET = process.env.ALTCHA_HMAC_SECRET;
const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL   = 'office@eagleholdings-ph.com';
const CC_EMAIL   = 'james.amattey@eagleholdings-ph.com';
const FROM_EMAIL = 'noreply@eagleholdings-ph.com'; // must be a verified Resend domain

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, organization, email, phone, inquiryType, message, altcha } = body;

    // ── 1. Server-side Altcha verification ──────────────────────────────────
    if (!altcha) {
      return Response.json({ error: 'CAPTCHA verification required.' }, { status: 400 });
    }

    const isValid = await verifySolution(altcha, HMAC_SECRET);
    if (!isValid) {
      return Response.json({ error: 'CAPTCHA verification failed. Please try again.' }, { status: 400 });
    }

    // ── 2. Basic field validation ────────────────────────────────────────────
    if (!name || !email || !inquiryType || !message) {
      return Response.json({ error: 'Please fill in all required fields.' }, { status: 400 });
    }

    // ── 3. Send email via Resend ─────────────────────────────────────────────
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to:   [TO_EMAIL],
      cc:   [CC_EMAIL],
      replyTo: email,
      subject: `[Eagle Holdings] New Inquiry — ${inquiryType}`,
      html: `
        <div style="font-family: 'Georgia', serif; max-width: 640px; margin: 0 auto; color: #1a1a1a;">
          <div style="border-bottom: 2px solid #A88C3A; padding-bottom: 16px; margin-bottom: 32px;">
            <h1 style="font-size: 22px; color: #A88C3A; margin: 0;">Eagle Holdings</h1>
            <p style="margin: 4px 0 0; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; color: #666;">
              New Consultation Request
            </p>
          </div>

          <table style="width: 100%; border-collapse: collapse; font-size: 15px; line-height: 1.7;">
            <tr>
              <td style="padding: 8px 0; color: #888; width: 160px; vertical-align: top;">Full Name</td>
              <td style="padding: 8px 0; font-weight: 600;">${name}</td>
            </tr>
            ${organization ? `
            <tr>
              <td style="padding: 8px 0; color: #888; vertical-align: top;">Organization</td>
              <td style="padding: 8px 0;">${organization}</td>
            </tr>` : ''}
            <tr>
              <td style="padding: 8px 0; color: #888; vertical-align: top;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #A88C3A;">${email}</a></td>
            </tr>
            ${phone ? `
            <tr>
              <td style="padding: 8px 0; color: #888; vertical-align: top;">Phone</td>
              <td style="padding: 8px 0;">${phone}</td>
            </tr>` : ''}
            <tr>
              <td style="padding: 8px 0; color: #888; vertical-align: top;">Area of Inquiry</td>
              <td style="padding: 8px 0; font-style: italic;">${inquiryType}</td>
            </tr>
          </table>

          <div style="margin-top: 32px; border-top: 1px solid #e5e5e5; padding-top: 24px;">
            <p style="color: #888; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; margin: 0 0 12px;">Message</p>
            <p style="font-size: 15px; line-height: 1.8; white-space: pre-wrap; margin: 0;">${message}</p>
          </div>

          <div style="margin-top: 48px; padding-top: 16px; border-top: 1px solid #e5e5e5; color: #aaa; font-size: 12px;">
            Submitted via eagleholdings-ph.com contact form · ${new Date().toUTCString()}
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return Response.json({ error: 'Failed to send message. Please try again later.' }, { status: 500 });
    }

    return Response.json({ success: true });

  } catch (err) {
    console.error('Contact API error:', err);
    return Response.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}
