// cloudflare-workers/src/utils/rateLimit.js
// Rate Limiting Utility using Cloudflare KV

import { RATE_LIMIT_CONFIG } from '../config/constants.js';

/**
 * Check rate limit for IP address
 */
export async function checkIPRateLimit(ip, env) {
  if (!env.VENDOR_CACHE) {
    console.warn('KV namespace not available, skipping rate limit');
    return { allowed: true };
  }

  const key = `ratelimit:ip:${ip}`;
  const now = Date.now();
  
  try {
    const data = await env.VENDOR_CACHE.get(key, 'json');
    
    if (!data) {
      // First request from this IP
      await env.VENDOR_CACHE.put(
        key,
        JSON.stringify({ count: 1, timestamp: now }),
        { expirationTtl: Math.floor(RATE_LIMIT_CONFIG.windowMs / 1000) }
      );
      return { allowed: true, remaining: RATE_LIMIT_CONFIG.maxRequestsPerIP - 1 };
    }

    // Check if window has expired
    if (now - data.timestamp > RATE_LIMIT_CONFIG.windowMs) {
      // Reset counter
      await env.VENDOR_CACHE.put(
        key,
        JSON.stringify({ count: 1, timestamp: now }),
        { expirationTtl: Math.floor(RATE_LIMIT_CONFIG.windowMs / 1000) }
      );
      return { allowed: true, remaining: RATE_LIMIT_CONFIG.maxRequestsPerIP - 1 };
    }

    // Check if limit exceeded
    if (data.count >= RATE_LIMIT_CONFIG.maxRequestsPerIP) {
      const retryAfter = Math.ceil((data.timestamp + RATE_LIMIT_CONFIG.windowMs - now) / 1000);
      return {
        allowed: false,
        message: `Too many requests from this IP. Please try again in ${retryAfter} seconds.`,
        retryAfter
      };
    }

    // Increment counter
    await env.VENDOR_CACHE.put(
      key,
      JSON.stringify({ count: data.count + 1, timestamp: data.timestamp }),
      { expirationTtl: Math.floor(RATE_LIMIT_CONFIG.windowMs / 1000) }
    );

    return {
      allowed: true,
      remaining: RATE_LIMIT_CONFIG.maxRequestsPerIP - data.count - 1
    };

  } catch (error) {
    console.error('Rate limit check error:', error);
    // Allow request if rate limit check fails
    return { allowed: true };
  }
}

/**
 * Check rate limit for email address
 */
export async function checkEmailRateLimit(email, env) {
  if (!env.VENDOR_CACHE) {
    return { allowed: true };
  }

  const key = `ratelimit:email:${email.toLowerCase()}`;
  const now = Date.now();
  
  try {
    const data = await env.VENDOR_CACHE.get(key, 'json');
    
    if (!data) {
      await env.VENDOR_CACHE.put(
        key,
        JSON.stringify({ count: 1, timestamp: now }),
        { expirationTtl: Math.floor(RATE_LIMIT_CONFIG.emailWindowMs / 1000) }
      );
      return { allowed: true, remaining: RATE_LIMIT_CONFIG.maxRequestsPerEmail - 1 };
    }

    if (now - data.timestamp > RATE_LIMIT_CONFIG.emailWindowMs) {
      await env.VENDOR_CACHE.put(
        key,
        JSON.stringify({ count: 1, timestamp: now }),
        { expirationTtl: Math.floor(RATE_LIMIT_CONFIG.emailWindowMs / 1000) }
      );
      return { allowed: true, remaining: RATE_LIMIT_CONFIG.maxRequestsPerEmail - 1 };
    }

    if (data.count >= RATE_LIMIT_CONFIG.maxRequestsPerEmail) {
      const hoursRemaining = Math.ceil((data.timestamp + RATE_LIMIT_CONFIG.emailWindowMs - now) / 3600000);
      return {
        allowed: false,
        message: `Maximum registrations reached for this email. Please try again in ${hoursRemaining} hours.`,
        retryAfter: Math.ceil((data.timestamp + RATE_LIMIT_CONFIG.emailWindowMs - now) / 1000)
      };
    }

    await env.VENDOR_CACHE.put(
      key,
      JSON.stringify({ count: data.count + 1, timestamp: data.timestamp }),
      { expirationTtl: Math.floor(RATE_LIMIT_CONFIG.emailWindowMs / 1000) }
    );

    return {
      allowed: true,
      remaining: RATE_LIMIT_CONFIG.maxRequestsPerEmail - data.count - 1
    };

  } catch (error) {
    console.error('Email rate limit check error:', error);
    return { allowed: true };
  }
}

/**
 * Combined rate limit check
 */
export async function checkRateLimit(ip, email, env) {
  const ipCheck = await checkIPRateLimit(ip, env);
  if (!ipCheck.allowed) {
    return ipCheck;
  }

  const emailCheck = await checkEmailRateLimit(email, env);
  if (!emailCheck.allowed) {
    return emailCheck;
  }

  return {
    allowed: true,
    ipRemaining: ipCheck.remaining,
    emailRemaining: emailCheck.remaining
  };
}