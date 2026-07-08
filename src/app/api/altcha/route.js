// src/app/api/altcha/route.js
// Serves fresh ALTCHA proof-of-work challenges to the browser widget

import { createChallenge } from 'altcha-lib';

const HMAC_SECRET = process.env.ALTCHA_HMAC_SECRET;

export async function GET() {
  if (!HMAC_SECRET) {
    return Response.json({ error: 'Server misconfiguration' }, { status: 500 });
  }

  const challenge = await createChallenge({
    hmacKey: HMAC_SECRET,
    maxNumber: 100000, // difficulty — higher = harder for bots
    expires: new Date(Date.now() + 10 * 60 * 1000), // 10-minute expiry
  });

  return Response.json(challenge);
}
