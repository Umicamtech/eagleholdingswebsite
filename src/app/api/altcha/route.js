// src/app/api/altcha/route.js
// Serves ALTCHA proof-of-work challenges.
// Protocol: challenge = SHA-256(salt + number), signature = HMAC-SHA-256(secret, challenge)

import { createHmac, createHash, randomBytes } from 'crypto';

const HMAC_SECRET = process.env.ALTCHA_HMAC_SECRET || 'dev-secret-change-in-production';
const MAX_NUMBER = 50000; // PoW difficulty

export async function GET() {
  const salt = randomBytes(12).toString('hex');
  const number = Math.floor(Math.random() * MAX_NUMBER);

  // Challenge = plain SHA-256 hash (not HMAC) — this is what the widget solves
  const challenge = createHash('sha256')
    .update(`${salt}${number}`)
    .digest('hex');

  // Signature = HMAC-SHA-256 of the challenge, used to verify server issued it
  const signature = createHmac('sha256', HMAC_SECRET)
    .update(challenge)
    .digest('hex');

  return Response.json({
    algorithm: 'SHA-256',
    challenge,
    maxnumber: MAX_NUMBER,
    salt,
    signature,
  });
}
