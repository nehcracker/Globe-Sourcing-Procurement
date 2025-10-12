// cloudflare-workers/src/index.js
// Main Worker Entry Point

import { handleVendorRegistration } from './handlers/vendorRegistration.js';
import { handleHealthCheck } from './handlers/health.js';
import { handleCorsPrelight, addCorsHeaders } from './utils/cors.js';

/**
 * Main request handler
 */
const worker = {
  async fetch(request, env, ctx) {
    // Handle CORS preflight requests
    if (request.method === 'OPTIONS') {
      return handleCorsPrelight(request, env);
    }

    try {
      const url = new URL(request.url);
      const path = url.pathname;

      // Route handling
      let response;

      if (path === '/api/vendor-registration' && request.method === 'POST') {
        response = await handleVendorRegistration(request, env);
      } else if (path === '/api/health' && request.method === 'GET') {
        response = await handleHealthCheck(env);
      } else if (path === '/' && request.method === 'GET') {
        response = new Response(JSON.stringify({
          service: 'Globe Sourcing Vendor Registration API',
          version: env.API_VERSION || 'v1',
          status: 'running',
          endpoints: {
            registration: 'POST /api/vendor-registration',
            health: 'GET /api/health'
          }
        }), {
          headers: { 'Content-Type': 'application/json' }
        });
      } else {
        response = new Response(JSON.stringify({
          error: 'Not found',
          path: path,
          method: request.method
        }), {
          status: 404,
          headers: { 'Content-Type': 'application/json' }
        });
      }

      // Add CORS headers to response
      return addCorsHeaders(response, request, env);

    } catch (error) {
      console.error('Worker error:', error);

      const errorResponse = new Response(JSON.stringify({
        success: false,
        error: 'Internal server error',
        message: env.ENVIRONMENT === 'development' ? error.message : 'An unexpected error occurred'
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });

      return addCorsHeaders(errorResponse, request, env);
    }
  }
};

export default worker;