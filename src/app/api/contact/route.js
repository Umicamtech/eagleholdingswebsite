// src/app/api/contact/route.js
// Verifies the Altcha CAPTCHA solution (using Node built-in crypto),
// then dispatches the inquiry email.
//
// EMAIL SETUP: Replace the sendEmail() stub below with your preferred provider
// (e.g. SendGrid, Mailgun, AWS SES, Nodemailer + SMTP, etc.)

import { createHmac } from 'crypto';

const HMAC_SECRET = process.env.ALTCHA_HMAC_SECRET || 'dev-secret-change-in-production';

// ─── Altcha verification (pure crypto — no npm package) ─────────────────────
function verifyAltcha(payload) {
  try {
    const decoded = JSON.parse(Buffer.from(payload, 'base64').toString('utf8'));
    const { algorithm, challenge, number, salt, signature } = decoded;

    if (algorithm !== 'SHA-256') return false;

    // Re-derive the expected challenge and signature
    const expectedChallenge = createHmac('sha256', HMAC_SECRET)
      .update(`${salt}${number}`)
      .digest('hex');

    const expectedSignature = createHmac('sha256', HMAC_SECRET)
      .update(expectedChallenge)
      .digest('hex');

    return challenge === expectedChallenge && signature === expectedSignature;
  } catch {
    return false;
  }
}

// ─── Email sender stub — replace with your email provider ───────────────────
async function sendEmail({ name, organization, email, phone, inquiryType, message }) {
  // TODO: Integrate your email provider here.
  // The submission details are all available in the parameters above.
  //
  // Example with Nodemailer (npm install nodemailer):
  //
  //   const nodemailer = require('nodemailer');
  //   const transporter = nodemailer.createTransport({ /* SMTP config */ });
  //   await transporter.sendMail({
  //     from: 'noreply@eagleholdings-ph.com',
  //     to: 'office@eagleholdings-ph.com',
  //     cc: 'james.amattey@eagleholdings-ph.com',
  //     replyTo: email,
  //     subject: `[Eagle Holdings] New Inquiry — ${inquiryType}`,
  //     html: `... your HTML body ...`,
  //   });

  console.log('📧 New contact submission (email not yet configured):', {
    name, organization, email, phone, inquiryType,
    message: message.substring(0, 80) + '...',
  });

  // Remove this line once a real email provider is wired in:
  return { ok: true };
}

// ─── POST handler ────────────────────────────────────────────────────────────
export async function POST(request) {
  try {
    const body = await request.json();
    const { name, organization, email, phone, inquiryType, message, altcha } = body;

    // 1. Verify CAPTCHA
    if (!altcha || !verifyAltcha(altcha)) {
      return Response.json(
        { error: 'Security check failed. Please refresh and try again.' },
        { status: 400 }
      );
    }

    // 2. Basic validation
    if (!name || !email || !inquiryType || !message) {
      return Response.json(
        { error: 'Please fill in all required fields.' },
        { status: 400 }
      );
    }

    // 3. Send email
    const result = await sendEmail({ name, organization, email, phone, inquiryType, message });
    if (!result.ok) {
      return Response.json(
        { error: 'Failed to send your message. Please try again later.' },
        { status: 500 }
      );
    }

    return Response.json({ success: true });

  } catch (err) {
    console.error('Contact API error:', err);
    return Response.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}
