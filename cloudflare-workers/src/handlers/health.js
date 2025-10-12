// cloudflare-workers/src/handlers/health.js
// Health Check Handler

/**
 * Handle health check requests
 */
export async function handleHealthCheck(env) {
  const health = {
    status: 'healthy',
    timestamp: new Date().toISOString(),
    environment: env.ENVIRONMENT || 'production',
    version: env.API_VERSION || 'v1',
    services: {}
  };

  // Check Zoho CRM configuration
  health.services.zoho = {
    configured: !!(env.ZOHO_CLIENT_ID && env.ZOHO_CLIENT_SECRET && env.ZOHO_REFRESH_TOKEN),
    apiUrl: env.ZOHO_API_URL
  };

  // Check KV namespace
  health.services.cache = {
    available: !!env.VENDOR_CACHE
  };

  // Check email service
  health.services.email = {
    configured: !!(env.SENDGRID_API_KEY || env.MAILGUN_API_KEY || env.RESEND_API_KEY),
    enabled: env.ENABLE_EMAIL_NOTIFICATIONS !== 'false'
  };

  // Check rate limiting
  health.services.rateLimit = {
    enabled: env.RATE_LIMIT_ENABLED !== 'false',
    maxRequests: parseInt(env.RATE_LIMIT_MAX_REQUESTS_PER_IP || '10')
  };

  // Overall health status
  const allServicesConfigured = 
    health.services.zoho.configured &&
    health.services.cache.available;

  health.status = allServicesConfigured ? 'healthy' : 'degraded';

  return new Response(JSON.stringify(health, null, 2), {
    status: allServicesConfigured ? 200 : 503,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    }
  });
}