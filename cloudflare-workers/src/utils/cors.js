// cloudflare-workers/src/utils/cors.js
// CORS Handling Utility

import { CORS_CONFIG } from '../config/constants.js';

/**
 * Get allowed origins from environment
 */
export function getAllowedOrigins(env) {
  const origins = env.ALLOWED_ORIGINS || 'http://localhost:3000';
  return origins.split(',').map(origin => origin.trim());
}

/**
 * Check if origin is allowed
 */
export function isOriginAllowed(origin, env) {
  const allowedOrigins = getAllowedOrigins(env);
  return allowedOrigins.includes(origin) || allowedOrigins.includes('*');
}

/**
 * Get CORS headers
 */
export function getCorsHeaders(request, env) {
  const origin = request.headers.get('Origin');
  const allowedOrigins = getAllowedOrigins(env);
  
  const headers = {
    'Access-Control-Allow-Methods': CORS_CONFIG.allowMethods.join(', '),
    'Access-Control-Allow-Headers': CORS_CONFIG.allowHeaders.join(', '),
    'Access-Control-Max-Age': CORS_CONFIG.maxAge.toString()
  };

  // Set origin based on allowed list
  if (origin && isOriginAllowed(origin, env)) {
    headers['Access-Control-Allow-Origin'] = origin;
    headers['Access-Control-Allow-Credentials'] = 'true';
  } else if (allowedOrigins.includes('*')) {
    headers['Access-Control-Allow-Origin'] = '*';
  } else {
    headers['Access-Control-Allow-Origin'] = allowedOrigins[0];
  }

  return headers;
}

/**
 * Handle CORS preflight request
 */
export function handleCorsPrelight(request, env) {
  return new Response(null, {
    status: 204,
    headers: getCorsHeaders(request, env)
  });
}

/**
 * Add CORS headers to response
 */
export function addCorsHeaders(response, request, env) {
  const corsHeaders = getCorsHeaders(request, env);
  const newHeaders = new Headers(response.headers);
  
  Object.entries(corsHeaders).forEach(([key, value]) => {
    newHeaders.set(key, value);
  });

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: newHeaders
  });
}