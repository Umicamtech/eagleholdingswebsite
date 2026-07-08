// src/app/api/altcha/route.js
// Serves fresh ALTCHA proof-of-work challenges using Node built-in crypto — no npm package needed.

import { createHmac, randomBytes } from 'crypto';

const HMAC_SECRET = process.env.ALTCHA_HMAC_SECRET || 'dev-secret-change-in-production';
const MAX_NUMBER = 100000; // PoW difficulty — increase to slow down bots further

function createChallenge() {
  const salt = randomBytes(12).toString('hex');
  const number = Math.floor(Math.random() * MAX_NUMBER);
  const algorithm = 'SHA-256';
  const challenge = createHmac('sha256', HMAC_SECRET)
    .update(`${salt}${number}`)
    .digest('hex');
  const signature = createHmac('sha256', HMAC_SECRET)
    .update(challenge)
    .digest('hex');

  return {
    algorithm,
    challenge,
    maxnumber: MAX_NUMBER,
    salt,
    signature,
  };
}

export async function GET() {
  return Response.json(createChallenge());
}
